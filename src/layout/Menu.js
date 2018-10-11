import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

const MyMenu = () => {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      <SubMenu title={<span><Icon type="book" /><span>文章管理</span></span>}>
        <Menu.Item key="push">
          <Link to="/article/publish"><span>已发布</span></Link>
        </Menu.Item>
        <Menu.Item key="draft">
          <Link to="/article/draft"><span>草稿箱</span></Link>
        </Menu.Item>
        <Menu.Item key="add">
          <Link to="/article/add"><span>添加文章</span></Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="tag">
        <Link to="/tag">
          <Icon type="tags" />
          <span>标签管理</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="analysis">
        <Link to="/analysis">
          <Icon type="pie-chart" />
          <span>数据分析</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/">
          <Icon type="contacts" />
          <span>留言管理</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="me">
        <Link to="/">
          <Icon type="user" />
          <span>个人中心</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};


export default MyMenu;