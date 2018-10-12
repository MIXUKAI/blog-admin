import React from 'react';
import PrefixIconInput from '../../../components/PrefixIconInput';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (value) => {
    this.props.onInputChange(value);
  }

  render() {
    const { value } = this.props;
    return (
      <PrefixIconInput
        size="large"
        icontype="edit"
        placeholder="请给你的文章取一个响亮的标题吧～"
        onInputChange={this.handleInputChange}
        value={value}
      />
    );
  }
}
