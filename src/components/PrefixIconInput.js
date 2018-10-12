import React from 'react';
import { Input, Icon } from 'antd';
import './styles/PrefixIconInput.css'

class PrefixIconInput extends React.Component {
  constructor(props) {
    super(props);
  }
  
  emitEmpty = () => {
    this.myinput.focus();
    this.props.onInputChange('');
  }

  handleChange = (e) => {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const { icontype, value, style, placeholder } = this.props;
    const suffix = value ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        style={style}
        prefix={<Icon type={icontype} style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        onChange={this.handleChange}
        ref={node => this.myinput = node}
        value={value}
        placeholder={placeholder}
      />
    );
  }
}

export default PrefixIconInput;