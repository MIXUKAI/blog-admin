import React from 'react';
import { Link } from 'react-router-dom';
import { List, Button, Tag, Popconfirm, message } from 'antd';

import { deleteArticle } from '../api';

function handleDelete(id) {
  deleteArticle(id)
    .then(res => {
      if (res.data.code === 0) {
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
    }).catch(err => console.error(err));
}

const ListItem = (props) => {
  const { title, id, tags, description, createAt } = props;
  return (
    <List.Item
      key={title}
      extra={
        <Popconfirm placement="left" title="确认删除该篇已发布的文章吗" onConfirm={() => handleDelete(id)} okText="Yes" cancelText="No">
          <Button type="danger" ghost icon="delete" size="small" id={id}>删除</Button>
        </Popconfirm>
      }
    >
      <List.Item.Meta
        title={[<Link to={`/article/edit/${id}`} style={{ marginRight: 10 }} key="link">{title}</Link>, <span style={{ fontSize: 15, color: 'rgb(59,145,255)' }} key="createAt">创建于: {createAt}</span>]}
        description={
          tags.map(value => <Tag key={value}>{value}</Tag>)
        }
      />
      <div>
        <div style={{ maxWidth: 960 }}>{description}</div>
      </div>
    </List.Item>
  );
}

export default ListItem;