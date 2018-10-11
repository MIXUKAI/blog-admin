import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default () => {
  return (
    <TextArea
      placeholder={"请给您的文章添加点表述把～"}
      autosize={{ minRows: 3, maxRows: 6 }}
      style={{ fontSize: 16, marginBottom: 15 }}
      onChange={this.getDesc}
      value={this.state.desc}
    />
  );
};
