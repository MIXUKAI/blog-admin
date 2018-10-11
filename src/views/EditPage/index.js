import React from 'react';
import { Select, message } from 'antd';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import MdEditor from '../../components/markdown';

import { Action, AuthorAndSource, Title, TagSelector, DesTextArea } from './components';

const Option = Select.Option;

class EditPage extends React.Component {
  state = {
    title: '',
    desc: '',
    tags: [],
    author: '',
    link: '',
    md_content: '',
    html_content: ''
  };

  // Get fields' value
  getTitle = (value) => { this.setState({ title: value }); };
  getDesc = (e) => { this.setState({ desc: e.target.value }); };
  getTags = (value) => { this.setState({ tags: value }); };
  getAuthor = (value) => { this.setState({ author: value }); };
  getLink = (value) => { this.setState({ link: value }); };
  getEditorContent = (md, html) => { this.setState({ md_content: md, html_content: html }); };

  // 当上传数据成功的时候，要清除所填的信息
  clearFields = () => {
    this.setState({
      title: '',
      desc: '',
      tags: [],
      author: '',
      link: '',
      md_content: '',
      children: []
    });
  };

  success = (res) => {
    if (res.data.code === 0) {
      message.success('添加文章成功');
      this.clearFields();
    } else {
      message.error('添加文章失败');
    }
  }
  fail = (err) => {
    console.error(err);
  }

  collectionState = () => {
    return {
      title: this.state.title,
      description: this.state.desc,
      tags: this.state.tags,
      source_link: this.state.link,
      author: this.state.author,
      md_content: this.state.md_content,
      html_content: this.state.html_content
    }
  }

  update = () => {
    const id = this.props.match.params.id;
    const url = `${baseApiUrl}/article/update/${id}`;
    const data = this.collectionState();
    axios.post(url, data)
      .then(this.success)
      .catch(this.fail);
  }

  publish = () => {
    const url = `${baseApiUrl}/article/add`;
    const data = this.collectionState();
    axios.post(url, data)
      .then(this.success)
      .catch(this.fail);
  }

  saveDraft = () => {
    const url = `${baseApiUrl}/draft/add`;
    const data = this.collectionState();
    axios.post(url, data)
      .then(this.success)
      .catch(this.fail);
  }

  fetchTags() {
    const url = `${baseApiUrl}/tag/`;
    axios.get(url)
      .then(res => {
        const children = res.data.map(item =>
          <Option key={item._id}>{item.name}</Option>
        )
        this.setState({ children });
      }).catch(err => {
        console.error(err);
      })
  }

  getArticleById = (id) => {
    const url = `${baseApiUrl}/article/${id}`;
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({
          title: data.title,
          desc: data.description,
          tags: data.tags,
          author: data.author,
          link: data.source_link || '',
          md_content: data.md_content,
        });
      })
      .catch(err => console.log(err));
  }

  getDraftById = (id) => {
    const url = `${baseApiUrl}/draft/${id}`;
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({
          title: data.title,
          desc: data.description,
          tags: data.tags,
          author: data.author,
          link: data.source_link || '',
          md_content: data.md_content,
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const match = this.props.match;
    console.log(match);
    if (match.path === '/article/edit/:id') {
      this.getArticleById(match.params.id);
    } else if (match.path === '/article/edit/draft/:id') {
      this.getDraftById(match.params.id);
    }
    this.fetchTags();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Title />
        <DesTextArea />
        <TagSelector />
        <AuthorAndSource />
        <MdEditor
          content={this.state.md_content}
          editorChange={this.getEditorContent}
        />
        <Action />
      </div>
    );
  }
}

export default EditPage;
