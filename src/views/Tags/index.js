import React from 'react';
import { List, Icon } from 'antd';
import axios from 'axios';

import baseApiUrl from '../../utils/api';
import Drawer from './Drawer';
import showConfirm from './Confirm';


class TagList extends React.Component {
  state = {
    visible: false,
    data: []
  };

  handleDrawerShow = () => {
    this.setState({ visible: true });
  }

  handleDelete = () => {
    showConfirm({title: '确定删除该标签？', content: '您选中的标签是'});
  }

  fetchTags = () => {
    const url = `${baseApiUrl}/tag/`;
    axios.get(url)
      .then(res => {
        const data = res.data.map(item => item.name);
        this.setState({ data });
      }).catch(err => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.fetchTags();
  }

  render() {
    return (
      <div>
      <List
        size="small"
        header={<div>
          标签列表
          <a style={{float:'right'}} onClick={this.handleDrawerShow}>新增标签</a>
        </div>}
        bordered
        dataSource={this.state.data}
        renderItem={item => (<List.Item actions={[<a><Icon type="delete" onClick={this.handleDelete} /></a>]}>{item}</List.Item>)}
      />
      <Drawer visible={this.state.visible}/>
    </div>
    );
  }
}

export default TagList;