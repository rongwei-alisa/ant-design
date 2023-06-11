import { Button, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary">主按钮</Button>
    <Button type="primary" ghost>
      常规一级
    </Button>
    <Button>常规二级</Button>
    <Button danger>危险按钮</Button>
    <Button type="text">文本按钮</Button>
    <Button type="dashed" size="large" block>
      虚线按钮
    </Button>
  </Space>
);

export default App;
