import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Tag, Button, message, Popconfirm } from 'antd';

import baseApiUrl from '../../utils/api';

function success(res) {
  if (res.data.code === 0) {
    message.success('删除成功');
  } else {
    message.error('删除失败');
  }
}
function fail(err) {
  console.error(err);
}

function handleDelete(id) {
  const url = `${baseApiUrl}/draft/delete/${id}`;
  axios({ method: 'POST', url: url, headers: { Authorization: "Bearer " + localStorage.getItem('token') } })
    .then(success)
    .catch(fail);
}

const columns = [{
  title: '标题',
  dataIndex: 'name',
  key: 'name',
  render: item => <Link to={`/article/edit/draft/${item.id}`}>{item.name}</Link>,
}, {
  title: '创建时间',
  dataIndex: 'createAt',
  key: 'createAt',
}, {
  title: '标签',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: '操作',
  key: 'action',
  dataIndex: 'delete',
  render: deleteId => (
    <Popconfirm placement="left" title="确认删除草稿吗" onConfirm={() => handleDelete(deleteId)} okText="Yes" cancelText="No">
      <Button type="danger" size="small" style={{fontSize:13}} icon="delete">删除</Button>
    </Popconfirm>
  ),
}];


class DraftTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  fetchData = () => {
    const url = 'http://localhost:8080/api/draft/all';
    axios.get(url)
      .then(res => {
        const data = res.data.map((item, index) => {
          return {
            key: index,
            name: { name: item.title, id: item._id },
            createAt: item.createAt,
            tags: item.tags,
            delete: item._id
          }
        })
        this.setState({ data });
      }).catch(err => {
        console.err(err);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <Table columns={columns} dataSource={this.state.data} />;
  }
}

export default DraftTable;
