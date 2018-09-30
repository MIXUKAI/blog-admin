import React from 'react';
import { Menu, Icon } from 'antd';

const MyMenu = () => {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Icon type="user" />
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="pie-chart" />
        <span>数据分析</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="form" />
        <span>编写文章</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="lock" />
        <span>安全设置</span>
      </Menu.Item>
    </Menu>
  );
};


export default MyMenu;