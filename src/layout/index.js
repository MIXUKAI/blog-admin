import React from 'react';
import { Layout } from 'antd';
import MyMenu from './Menu';
import MyContent from './Content';
import './styles/index.css';

const { Footer, Sider } = Layout;

const MyLayout = (props) => (
  <Layout>
    <Sider
      style={{ backgroundColor: '#fff' }}
    >
      <div className="logo" />
      <MyMenu />
    </Sider>
    <Layout>
      <MyContent>
        { props.children }
      </MyContent>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default MyLayout;