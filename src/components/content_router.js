import React from 'react';
import { Route } from "react-router-dom";
import { Layout } from 'antd';
import PublishList from './publish';
import DraftTable from './draft';
import MyEditor from './edit_content';
import './styles/content.css';

const { Content } = Layout;

const contetnStyle = {
  // maxWidth: '1024px',
  margin: '24px',
  padding: 24,
  minHeight: 280,
  height: '100%',
  background: '#fff'
}

const MyContent = ({ match }) => {
  return (
    <Content style={contetnStyle}>
      <Route path={`${match.url}/publish`} component={PublishList} />
      <Route path={`${match.url}/draft`} component={DraftTable} />
      <Route path={`${match.url}/add`} component={MyEditor} />
    </Content>
  );
};

export default MyContent;