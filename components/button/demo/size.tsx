import { Button, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="dashed" size="large" block>
      虚线按钮
    </Button>
    <Button type="primary" size="large">
      主按钮
    </Button>
    <Button type="primary">主按钮</Button>
    <Button type="primary" size="small">
      主按钮
    </Button>
  </Space>
);
export default App;
