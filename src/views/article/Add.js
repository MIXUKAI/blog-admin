import React from 'react';
import { Input, Select, Icon, Button } from 'antd';
import axios from 'axios';

import MdEditor from '../../components/markdown';
import PrefixIconInput from '../../components/PrefixIconInput';

const { TextArea } = Input;
const InputGroup = Input.Group;
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

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

  getTitle = (value) => { this.setState({ title: value }); };
  getDesc = (e) => { this.setState({ desc: e.target.value }); };
  getTags = (value) => { this.setState({ tags: value }); };
  getAuthor = (value) => { this.setState({ author: value }); };
  getLink = (value) => { this.setState({ link: value }); };
  getEditorContent = (md, html) => { this.setState({ md_content: md, html_content: html }); };

  publish = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <PrefixIconInput
          size="large"
          icontype="edit"
          placeholder="请给你的文章取一个响亮的标题吧～" 
          getValue={this.getTitle}
        />
        <TextArea
          placeholder={"请给您的文章添加点表述把～"}
          autosize={{ minRows: 3, maxRows: 6 }}
          style={{ fontSize: 16, marginBottom: 15 }}
          onChange={this.getDesc}
        />
        <Select
          mode="tags"
          style={{ width: '100%', marginBottom: 15 }}
          placeholder={[<Icon type="tags" style={{ marginRight: 5 }} />, "选择标签"]}
          onChange={this.getTags}
        >
          {children}
        </Select>
        <InputGroup compact>
          <PrefixIconInput
            icontype="user"
            placeholder="请标注原作者，原创请忽略～"
            style={{ width: '50%' }}
            getValue={this.getAuthor}
          />
          <PrefixIconInput icontype="link"
            placeholder="请标注原文链接，原创请忽略～"
            style={{ width: '50%' }}
            getValue={this.getLink}
          />
        </InputGroup>
        <MdEditor
          content=''
          editorChange={this.getEditorContent}
        />
        <Button.Group size="large" style={{ float: "right", marginTop: 20 }}>
          <Button>
            <Icon type="save" />保存
          </Button>
          <Button type="primary" onClick={this.publish}>
            <Icon type="smile" />发表
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default EditPage;
