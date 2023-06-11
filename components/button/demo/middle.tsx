import { Button, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Space style={{ width: '100%', background: '#f0f0f0', padding: '12px 24px' }}>
      <Button type="primary">创建报销单</Button>
      <Button>批量分摊</Button>
      <Button>批量转交</Button>
      <Button danger>移除</Button>
      <div>已选 0 条费用，合计 ¥0.00</div>
    </Space>
    <Space style={{ width: '100%', background: '#f0f0f0', padding: '8px 24px' }}>
      <Button type="primary">新建费用</Button>
    </Space>
  </Space>
);

export default App;
