import React from 'react';
import { Input, Icon } from 'antd';
import './styles/PrefixIconInput.css'

class PrefixIconInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };
  }

  emitEmpty = () => {
    this.myinput.focus();
    this.setState({ value: '' });
  }

  onChangeInputValue = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    const { icontype } = this.props;
    const suffix = value ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        prefix={<Icon type={icontype} style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={value}
        onChange={this.onChangeInputValue}
        ref={node => this.myinput = node}
        {...this.props}
      />
    );
  }
}

export default PrefixIconInput;