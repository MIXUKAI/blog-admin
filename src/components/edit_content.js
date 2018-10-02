import React from 'react';
import { Layout } from 'antd';
import './styles/content.css';
import MyEditor from './markdown';

const { Content } = Layout;

const contetnStyle = {
  margin: '24px',
  padding: 24,
  minHeight: 280,
  height: '100%'
}

const EditContent = () => {
  return (
    <Content style={contetnStyle}>
      <MyEditor />
    </Content>
  );
};

export default EditContent;