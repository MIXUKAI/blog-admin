import React from 'react';
import { List, Button, Tag } from 'antd';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
  });
}

const PublishList = () => (
  <List
    itemLayout="vertical"
    dataSource={listData}
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          [<Button type="primary" icon="setting" style={{ marginRight: 10 }}>编辑</Button>, <Button type="danger" icon="delete">删除</Button>]
        }
      >
        <List.Item.Meta
          title={[<a href="https://ant.design" style={{ marginRight: 10 }}>{item.title}</a>]}
          description={[<Tag color="blue">javaScript</Tag>, <Tag color="blue">Node.js</Tag>, <Tag color="blue">mongodb</Tag>]}
        />
        <div>
          <div style={{ maxWidth: 960 }}>{item.content}</div>
          <div style={{ marginTop: 15, lineHeight: '22px' }}>原文发布在<a style={{ marginRight: 8 }}>https://ant.design</a><span style={{ color: 'rgba(0,0,0,.25)' }}>2018-09-29 17:26</span></div>
        </div>
      </List.Item>
    )}
  />
);

export default PublishList;

