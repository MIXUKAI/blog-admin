import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import MyMenu from './nav_menu';
import MyContent from './content_router';
import EditContent from './edit_content';
import './styles/layout.css';

const { Header, Footer, Sider } = Layout;

class MyLayout extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Sider
            style={{ backgroundColor: '#fff' }}
          >
            <div className="logo" />
            <MyMenu />
          </Sider>
          {/* <Header style={{backgroundColor: '#fff'}}>
            <div className="logo">
              <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="logo-img"/>
            </div>
          </Header> */}
          <Layout>
            <Route path="/article" component={MyContent} />
            <Route path="/edit" component={EditContent} />
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
          </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default MyLayout;