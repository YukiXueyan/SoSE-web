import { Form, Input, Button, Select, message } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AdminLogin = (props: any) => {
  const { setIsLogin } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { username, password } = values;

    if (username === 'qxyadmin' && password === '123456admin') {
      setIsLogin(true);
      message.success('登录成功');
    } else {
      message.error('密码错误，登录失败');
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重试
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminLogin;
