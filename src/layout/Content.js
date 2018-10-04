import React from 'react';
import { Layout } from 'antd';
import './styles/content.css';

const { Content } = Layout;

const contetnStyle = {
  margin: 24,
  padding: 24,
  minHeight: 280,
  height: '100%',
  backgroundColor: '#fff'
}

const MyContent = (props) => {
  const { children } = props;
  return (
    <Content style={contetnStyle}>
        { children }
    </Content>
  );
};

export default MyContent;