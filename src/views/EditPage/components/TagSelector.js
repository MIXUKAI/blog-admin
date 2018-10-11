import React from 'react';
import { Select, Icon } from 'antd';

export default () => {
  return (
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
  );
};
