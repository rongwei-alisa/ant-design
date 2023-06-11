import { Button, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary" icon="">
      下载内容
    </Button>
    <Button type="primary">添加内容</Button>
    <Button type="text">文本按钮</Button>
  </Space>
);

export default App;
