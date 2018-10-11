import React from 'react'
import { Input } from 'antd';

import PrefixIconInput from '../../../components/PrefixIconInput';

const InputGroup = Input.Group;

export default () => {
  return (
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
  );
};
