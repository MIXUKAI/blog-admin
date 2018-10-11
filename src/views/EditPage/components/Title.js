import React from 'react';
import PrefixIconInput from '../../../components/PrefixIconInput';

export default () => {
  return (
    <PrefixIconInput
      size="large"
      icontype="edit"
      placeholder="请给你的文章取一个响亮的标题吧～"
      getValue={this.getTitle}
      value={this.state.title}
    />
  );
};
