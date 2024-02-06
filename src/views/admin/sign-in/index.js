import React from "react";
import { Form, Input, Button, Card } from "antd";
import {  LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const AdminSignIn = () => {

  const onFinish = async (values) => {
    window.location.href = "home"
  }

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div>
        <h1>Login</h1>

        <Card  title={<h2>Admin</h2>}>
          <Form>

            <p>Email:</p>
            <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
              <Input />
            </Form.Item>

            <p>Password:</p>
            <Form.Item name="password" rules={[{ required: true }]} >
              <Input.Password
                type="password" prefix={<LockOutlined style={{ color: "#1677ff" }} />}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                visibilityToggle
              />
            </Form.Item>
            <Button type="primary" onClick={() => onFinish()} htmlType="submit">
              Sign In
            </Button>
          </Form>

          <p className="data-privacy-link">Signing in or signing up means you agree with our <a style={{ textDecoration: "underline" }}>data privacy</a>.</p>
        </Card>
      </div>
    </div>

  )
}

export default AdminSignIn