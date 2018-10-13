import React from 'react';
import { Select, message } from 'antd';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import MdEditor from '../../components/markdown';

// TODO：一次性倒入
import Action from './components/Action';
import AuthorAndSource from './components/AuthorAndSource';
import DesTextArea from './components/DesTextArea';
import TagSelector from './components/TagSelector';
import Title from './components/Title';

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

  // 获取各个字段的value
  getTitle = (value) => { this.setState({ title: value })};
  getDesc = (e) => { this.setState({ desc: e.target.value }); };
  getTags = (value) => { this.setState({ tags: value }); };
  getAuthor = (value) => { this.setState({ author: value }); };
  getLink = (value) => { this.setState({ link: value }); };
  getEditorContent = (md, html) => { this.setState({ md_content: md, html_content: html }); };

  // 当上传数据成功的时候，要清除所填的信息
  clearFields = () => {
    this.setState({
      title:'',desc:'',tags:[],author:'',
      link:'',md_content:'',optionData:[]
    });
  };

  success = (res) => {
    if (res.data.code === 0) {
      message.success('添加文章成功');
      this.clearFields();
    } else if (res.data.status === 401) {
      message.error('请登录后再操作');
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

  // 编辑进入，是更新草稿还是文章，要判断路经
  update = () => {
    const { match } = this.props;
    const id = match.params.id;
    const path = match.path;
    const url = path === '/article/edit/:id' ?
      `${baseApiUrl}/article/update/${id}` :
      `${baseApiUrl}/draft/update/${id}`;
    const data = this.collectionState();
    axios.post(url, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })
      .then(this.success)
      .catch(this.fail);
  }

  // 从添加文章路口进入，和从编辑草稿入口进入，前者直接添加到数据库中，后者还要删除草稿箱中的数据
  // 因此要判断路径
  publish = () => {
    const { match } = this.props;
    const id = match.params.id;
    const path = match.path;
    const url = path === '/article/add' ? 
      `${baseApiUrl}/article/add` :
      `${baseApiUrl}/draft/publish/${id}`;
    console.log(url);
    const data = this.collectionState();
    console.log(data);
    axios.post(url, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })
      .then(this.success)
      .catch(this.fail);
  }

  // 保存为草稿
  saveDraft = () => {
    const url = `${baseApiUrl}/draft/add`;
    const data = this.collectionState();
    axios.post(url, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })
      .then(this.success)
      .catch(this.fail);
  }

  fetchTags() {
    const url = `${baseApiUrl}/tag/`;
    axios.get(url)
      .then(res => {
        const optionData = res.data.map(item =>
          // select的value是根据key的value来的
          <Option key={item.name}>{item.name}</Option>
        )
        this.setState({ optionData });
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
    // 编辑进入的时候获取数据
    if (match.path === '/article/edit/:id') {
      this.getArticleById(match.params.id);
    } else if (match.path === '/article/edit/draft/:id') {
      this.getDraftById(match.params.id);
    }
    this.fetchTags();
  }

  render() {
    const { match } = this.props;
    const { title, desc, tags, optionData, author, link } = this.state;
    return (
      <div>
        <Title value={title} onInputChange={this.getTitle}/>
        <DesTextArea value={desc} onDescriptionChange={this.getDesc}/>
        <TagSelector value={tags} onTagSelectChange={this.getTags}>
          { optionData }
        </TagSelector>
        <AuthorAndSource author={author} link={link} 
          onLinkChange={this.getLink}
          onAuthorChange={this.getAuthor}
        />
        <MdEditor
          content={this.state.md_content}
          editorChange={this.getEditorContent}
        />
        <Action match={match} save={this.saveDraft} update={this.update} publish={this.publish}/>
      </div>
    );
  }
}

export default EditPage;
