import React from 'react';

import { List, Icon } from 'antd';

const data = [
  'React',
  'JavaScript',
  'Linux'
];

const TagList = () => {
  return (
    <div>
      <List
        size="small"
        header={<div>
          标签列表
          <a style={{float:'right'}}>新增标签</a>
        </div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item actions={[<a><Icon type="delete"/></a>]}>{item}</List.Item>)}
      />
    </div>
  );
};


export default TagList;

