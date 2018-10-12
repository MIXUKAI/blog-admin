import React from 'react'
import { Input } from 'antd';

import PrefixIconInput from '../../../components/PrefixIconInput';

const InputGroup = Input.Group;

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAuthorChange = (value) => {
    this.props.onAuthorChange(value);
  }

  handleLinkChange = (value) => {
    this.props.onLinkChange(value);
  }

  render() {
    const { author, link } = this.props;
    return (
      <InputGroup compact>
        <PrefixIconInput
          icontype="user"
          placeholder="请标注原作者，原创请忽略～"
          style={{ width: '50%' }}
          onInputChange={this.handleAuthorChange}
          value={author}
        />
        <PrefixIconInput icontype="link"
          placeholder="请标注原文链接，原创请忽略～"
          style={{ width: '50%' }}
          onInputChange={this.handleLinkChange}
          value={link}
        />
      </InputGroup>
    );
  }
}
