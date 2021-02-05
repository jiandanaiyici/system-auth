import React from 'react';
import { Spin, Button, Card } from 'antd';
import './App.css';
import { useQuery } from './hooks';

const App = () => {
  const [run, data, loading, { reset }] = useQuery('/api/queryUserInfo');

  return (
    <Card className="App">
      <Button type="primary" onClick={run}>
        请求
      </Button>
      <Button onClick={reset}>Reset</Button>
      <Spin spinning={loading}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Spin>
    </Card>
  );
};

export default App;
