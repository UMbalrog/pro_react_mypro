import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'
import { Form, Input, Button } from 'antd'

const Shop = () => {
  const state = useSelector(state => state);
  return (
    <Layout title="登录" subTitle="快来登录吧！">
      <Form>
        <Form.Item label="昵称" name="name"
          rules={[{ required: true, message: '请输入你的名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Shop