import React from 'react';
import { Icon, Button } from 'antd';

const style = {
  float: "right", 
  marginTop: 20
};

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = () => this.props.update();
  handlePublish = () => this.props.publish();
  handleSave = () => this.props.save();


  render() {
    const path = this.props.match.path;
    return (
      <div>
        { 
          path === '/article/edit/:id' ?
          <Button type="primary" size="large" onClick={this.handleUpdate} style={style}>
            <Icon type="smile"/>更新文章
          </Button> : 
          <Button.Group size="large" style={style}>
            <Button 
              onClick={ 
                path === '/article/edit/draft/:id' ? 
                this.handleUpdate : this.handleSave
              }
            >
              <Icon type="save" />
              {
                path === '/article/edit/draft/:id' ?
                  '更新草稿' : '保存为草稿'
              }
            </Button>
            <Button type="primary" 
              onClick={this.handlePublish}>
              <Icon type="smile" />发布到博客
            </Button>
          </Button.Group>
        }
      </div>
    );
  }
}
