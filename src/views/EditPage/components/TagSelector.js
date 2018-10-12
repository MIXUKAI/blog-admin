import React from 'react';
import { Select, Icon } from 'antd';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (value) => {
    this.props.onTagSelectChange(value);
  }

  render() {
    const { value, children } = this.props;
    return (
      <Select
        mode="tags"
        allowClear
        style={{ width: '100%', marginBottom: 15 }}
        placeholder={[<Icon type="tags" style={{ marginRight: 5 }} key="icon"/>, "选择标签"]}
        onChange={this.handleChange}
        value={value}
      >
        {children}
      </Select>
    );
  }
}
