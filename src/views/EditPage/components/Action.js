import React from 'react';
import { Icon, Button } from 'antd';

export default () => {
  return (
    <Button.Group size="large" style={{ float: "right", marginTop: 20 }}>
      <Button onClick={this.saveDraft}>
        <Icon type="save" />保存
          </Button>
      {
        match.path === '/article/edit/:id' ?
          <Button type="primary" onClick={this.update}>
            <Icon type="smile" />更新
            </Button> :
          <Button type="primary" onClick={this.publish}>
            <Icon type="smile" />发表
            </Button>
      }
    </Button.Group>
  );
};
