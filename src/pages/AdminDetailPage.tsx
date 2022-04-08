import React from 'react';
import { Layout, Form, Input, Button, Radio, InputNumber, message } from 'antd';
const { Header, Content, Footer } = Layout;
import { connect } from 'dva';
import queryString from 'query-string';
import axios from 'axios';
import { URL } from '../utils/globalData';
import { stringify } from 'qs';
import { history } from 'umi';

const AdminDetail = (props: any) => {
  const query = window.location.search;
  const { key } = queryString.parse(query);
  console.log('key', key, typeof key);

  const onFinish = (values: any) => {
    console.log('Success:', values);

    const { feature } = values;

    switch (key) {
      case '1':
        axios.post(`${URL}/question/add?${stringify(values)}`).then(() => {
          message.success({
            content: '新建成功',
          });
          history.push(`/admin`);
        });
        break;
      case '2':
        const feature2 = JSON.parse(feature);
        const data = {
          ...values,
          feature: feature2,
        };
        axios.post(`${URL}/achieve/addAchieve?${stringify(data)}`).then(() => {
          message.success({
            content: '新建成功',
          });
          history.push(`/admin`);
        });
        break;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: '0 16px' }}>
        <div className="site-layout-content">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {key === '1' && (
              <>
                <Form.Item
                  label="题目信息"
                  name="question"
                  rules={[{ required: true, message: '请输入题目' }]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  label="正确答案"
                  name="currentAnswer"
                  rules={[{ required: true, message: '请输入答案' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="选项"
                  name="options"
                  rules={[{ message: '请输入选项, 选项之间用英文逗号隔开' }]}
                >
                  <Input placeholder="请输入选项" />
                </Form.Item>
                <Form.Item
                  label="章节"
                  name="chapterId"
                  rules={[{ required: true, message: '请输入章节' }]}
                >
                  <InputNumber defaultValue={1} max={4} min={1} />
                </Form.Item>
                <Form.Item
                  label="类型"
                  name="type"
                  rules={[{ required: true, message: '请选择类型' }]}
                >
                  <Radio.Group>
                    <Radio value={1}>单选</Radio>
                    <Radio value={2}>多选</Radio>
                    <Radio value={3}>判断</Radio>
                  </Radio.Group>
                </Form.Item>
              </>
            )}
            {key === '2' && (
              <>
                <Form.Item
                  label="成就名称"
                  name="name"
                  rules={[{ required: true, message: '请输入成就名称' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="成就描述"
                  name="desc"
                  rules={[{ required: true, message: '请输入成就描述' }]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  label="解锁所需答题次数"
                  name="number"
                  // rules={[{ required: true, message: '请输入答案' }]}
                >
                  <InputNumber defaultValue={0} />
                </Form.Item>
                <Form.Item
                  label="游戏模式"
                  name="modeId"
                  // rules={[{ required: true, message: '请输入答案' }]}
                >
                  <InputNumber defaultValue={0} max={3} min={0} />
                </Form.Item>
                <Form.Item label="附加参数" name="feature">
                  <Input.TextArea />
                </Form.Item>
              </>
            )}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
};

function mapStateToProps(state: any) {
  // const questions = state.questions.data;
  return {
    // loading: state.loading.models.questions,
    // questions
    ...state,
    // ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(AdminDetail);
