import React from 'react';
import { Tabs, Layout } from 'antd';
import PublishList from './publish';
import DraftTable from './draft';
import './styles/content.css';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const contetnStyle = {
  maxWidth: '1024px',
  margin: '24px auto',
  padding: 24,
  minHeight: 280,
  height: '100%'
}

const MyContent = () => {
  return (
    <Content style={contetnStyle}>
      <Tabs defaultActiveKey="1" onChange={callback} style={{ background: '#fff', padding: 20}}>
        <TabPane tab="已发布" key="1">
          <PublishList />
        </TabPane>
        <TabPane tab="草稿箱" key="2">
          <DraftTable />
        </TabPane>
        <TabPane tab="标签管理" key="3">标签</TabPane>
      </Tabs>
    </Content>
  );
};

export default MyContent;