import { Button, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary" disabled>
      主按钮
    </Button>
    <Button type="primary" ghost disabled>
      常规按钮
    </Button>
    <Button disabled>常规按钮</Button>
  </Space>
);

export default App;
