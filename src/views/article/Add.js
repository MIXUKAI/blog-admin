import React from 'react';
import { Input, Select, Icon, Button, message } from 'antd';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import MdEditor from '../../components/markdown';
import PrefixIconInput from '../../components/PrefixIconInput';

const { TextArea } = Input;
const InputGroup = Input.Group;
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

  // Clear all input' value
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
  // Invoked when add successfully or unsuccessfully
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

  update = () => {
    const id = this.props.match.params.id;
    const url = `${baseApiUrl}/article/update/${id}`;
    const data = {
      title: this.state.title,
      description: this.state.desc,
      tags: this.state.tags,
      source_link: this.state.link,
      author: this.state.author,
      md_content: this.state.md_content,
      html_content: this.state.html_content
    };
    axios.post(url, data)
      .then(this.success)
      .catch(this.fail);
  }

  publish = () => {
    const url = `${baseApiUrl}/article/add`;
    const data = {
      title: this.state.title,
      description: this.state.desc,
      tags: this.state.tags,
      md_content: this.state.md_content,
      html_content: this.state.html_content,
      source_link: this.state.link,
      author: this.state.author
    };
    axios.post(url, data)
      .then(this.success)
      .catch(this.fail);
  }

  fetchTags() {
    const url = `${baseApiUrl}/tag/`;
    axios.get(url)
      .then(res => {
        const children = res.data.map(item => 
          <Option key={item._id}>{ item.name }</Option>
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

  componentDidMount() {
    const match = this.props.match;
    console.log(match);
    if (match.path === '/article/edit/:id') {
      this.getArticleById(match.params.id);
    }
    this.fetchTags();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <PrefixIconInput
          size="large"
          icontype="edit"
          placeholder="请给你的文章取一个响亮的标题吧～" 
          getValue={this.getTitle}
          value={this.state.title}
        />
        <TextArea
          placeholder={"请给您的文章添加点表述把～"}
          autosize={{ minRows: 3, maxRows: 6 }}
          style={{ fontSize: 16, marginBottom: 15 }}
          onChange={this.getDesc}
          value={this.state.desc}
        />
        <Select
          mode="tags"
          allowClear
          style={{ width: '100%', marginBottom: 15 }}
          placeholder={[<Icon type="tags" style={{ marginRight: 5 }} />, "选择标签"]}
          onChange={this.getTags}
          value={this.state.tags}
        >
          {this.state.children}
        </Select>
        <InputGroup compact>
          <PrefixIconInput
            icontype="user"
            placeholder="请标注原作者，原创请忽略～"
            style={{ width: '50%' }}
            getValue={this.getAuthor}
            value={this.state.author}
          />
          <PrefixIconInput icontype="link"
            placeholder="请标注原文链接，原创请忽略～"
            style={{ width: '50%' }}
            getValue={this.getLink}
            value={this.state.link}
          />
        </InputGroup>
        <MdEditor
          content={this.state.md_content}
          editorChange={this.getEditorContent}
        />
        <Button.Group size="large" style={{ float: "right", marginTop: 20 }}>
          <Button>
            <Icon type="save" />保存
          </Button>
          {
            match.path === '/article/edit/:id' ?
            <Button type="primary" onClick={this.update}>
              <Icon type="smile" />更新
            </Button> :
            <Button type="primary" onClick={this.publish}>
              <Icon type="smile" />发表
            </Button>
          }
        </Button.Group>
      </div>
    );
  }
}

export default EditPage;
