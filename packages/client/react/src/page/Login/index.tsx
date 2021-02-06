import React from 'react';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Login = () => {
  const [form] = Form.useForm();
  return (
    <Form
      onFinish={(v) => {
        console.log(v);
      }}
      initialValues={{
        userName: '',
        password: '',
      }}
      style={{ width: 500, padding: 24, margin: '0 auto' }}
      {...layout}
      form={form}
    >
      <Form.Item
        label="userName"
        name="userName"
        rules={[
          {
            required: true,
            message: 'userName required',
          },
        ]}
      >
        <Input autoComplete="false" />
      </Form.Item>
      <Form.Item label="password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
