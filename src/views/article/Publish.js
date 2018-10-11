import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, Button, Tag, message, Popconfirm } from 'antd';
import moment from 'moment';

import baseApiUrl from '../../utils/api';

class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
  }

  success = (res) => {
    if (res.data.code === 0) {
      message.success('删除成功');
      this.clearFields();
    } else {
      message.error('删除失败');
    }
  }
  fail = (err) => {
    console.error(err);
  }

  handleDelete = (id) => {
    const url = `${baseApiUrl}/article/delete/${id}`;
    axios.post(url)
      .then(this.success)
      .catch(this.fail)
  }

  fetchAllArticles = () => {
    const url = `${baseApiUrl}/article/all`;
    axios.get(url)
      .then(res => {
        const data = res.data;
        const listData = data.map(item => {
          return {
            title: item.title,
            avatar: item.cover || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: item.description,
            createAt: moment(item.createAt).format('YYYY-MM-DD'),
            tags: item.tags,
            id: item._id
          };
        })
        this.setState({ listData });
      }).catch(err => {
        console.error(err);
      })
  }
  componentDidMount() {
    this.fetchAllArticles();
  }

  render() {
    const { listData} = this.state;
    return (
      <List
        itemLayout="vertical"
        dataSource={listData}
        pagination="true"
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <Popconfirm placement="left" title="确认删除该篇已发布的文章吗" onConfirm={() => this.handleDelete(item.id)} okText="Yes" cancelText="No">
                <Button type="danger" ghost icon="delete" size="small"  id={item.id}>删除</Button>
              </Popconfirm>
            }
          >
            <List.Item.Meta
              title={[<Link to={`/article/edit/${item.id}`}style={{marginRight: 10}}>{item.title}</Link>, <span style={{fontSize: 15, color: 'rgb(59,145,255)'}}>创建于: {item.createAt}</span>]}
              description={
                item.tags.map(value => <Tag key={value}>{value}</Tag>)
              }
            />
            <div>
              <div style={{ maxWidth: 960 }}>{item.description}</div>
            </div>
          </List.Item>
        )}
      />
    );
  }
}

export default Publish;

