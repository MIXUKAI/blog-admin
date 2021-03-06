import React from 'react';
import { List } from 'antd';

import ListItem from './components/ListItem';
import { fetchAllArticles } from './api';


class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
  }

  componentDidMount() {
    // TODO: 需要在这里new吗还是那api模块里就可以new了
    new Promise(fetchAllArticles)
      .then(data => this.setState({listData: data}))
      .catch(err => console.error(err));
  }

  render() {
    const { listData } = this.state;
    return (
      <List
        itemLayout="vertical"
        dataSource={listData}
        pagination="true"
        renderItem={ListItem}
      />
    );
  }
}

export default Publish;

