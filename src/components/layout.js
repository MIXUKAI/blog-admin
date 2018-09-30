import React, { Component } from 'react';
import { Layout } from 'antd';
import MyMenu from './nav_menu';
import MyContent from './content_router';
import './styles/layout.css';

const { Header, Footer } = Layout;

class MyLayout extends Component {
  render() {
    return (
      <Layout>
        <Header style={{backgroundColor: '#fff'}}>
          <div className="logo">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="logo-img"/>
          </div>
          <MyMenu />
        </Header>
        <MyContent />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default MyLayout;