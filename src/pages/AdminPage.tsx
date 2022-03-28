import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './adminPage.less';
import axios from 'axios';

import {
  Layout,
  Menu,
  Table,
  Space,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: any;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Admin = (params: any) => {
  const { dispatch, questions, loading } = params;

  const [manager, setManager] = useState<any>('null');
  const [collapsed, setcollapsed] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [columns, setColumns] = useState<any>([]);

  const [pageSize, setPageSize] = useState(20);
  const [pageNum, setpageNum] = useState(0);
  const [chapterId, setChapterId] = useState(null);
  const [defaultMenuKey, setDefaultMenuKey] = useState('1');

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: any) => String(record.id) === String(editingKey);

  const edit = (record: Partial<any> & { key: React.Key }) => {
    form.setFieldsValue({ ...record });
    setEditingKey(String(record?.id));
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as any; // 输入框对象
      console.log('save', key, row);
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    setManager(admin);

    getQData({ pageSize, pageNum });
  }, []);

  useEffect(() => {
    changeColumns();
  }, [editingKey]);

  useEffect(() => {
    changeData();
  }, [defaultMenuKey]);

  const changeData = () => {
    switch (defaultMenuKey) {
      case '1':
        getQData({ pageSize, pageNum });
        break;
      case '3':
        getUserData();
        break;
      case '2':
        getAData();
        break;
    }
  };
  const changeColumns = () => {
    switch (defaultMenuKey) {
      case '1':
        renderQuestions();
        break;
      case '3':
        renderUsers();
        break;
      case '2':
        renderAchieve();
        break;
    }
  };
  function getQData(params: {
    pageNum?: any;
    chapterId?: any;
    pageSize?: any;
  }) {
    const { pageNum, chapterId, pageSize } = params;
    dispatch({
      type: `questions/getQuestionAll`,
      payload: {
        chapterId,
        pageNum,
        pageSize,
        rand: false,
      },
    }).then((res: any) => {
      setDataSource(res || []);
      renderQuestions();
    });
  }

  const getUserData = () => {
    axios.get(`http://localhost:3000/user/allUsers`).then((res: any) => {
      setDataSource(res?.data);
    });
  };
  const getAData = () => {
    axios.get(`http://localhost:3000/achieve/listAll`).then((res: any) => {
      setDataSource(res?.data);
    });
  };

  const onCollapse = (value: any) => {
    setcollapsed(value);
  };

  // 题目配置
  const renderQuestions = () => {
    const column = [
      {
        title: '题目',
        dataIndex: 'question',
        key: 'question',
        editable: true,
      },
      {
        title: '正确答案',
        dataIndex: 'currentAnswer',
        key: 'currentAnswer',
        editable: true,
      },
      {
        title: '选项',
        dataIndex: 'options',
        key: 'options',
        editable: true,
        render: (value: any) => {
          return String(value);
        },
      },
      {
        title: '章节',
        dataIndex: 'chapterId',
        key: 'chapterId',
        editable: true,
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        editable: true,
        render: (value: any) => {
          switch (String(value)) {
            case '1':
              return '单选';
            case '3':
              return '判断';
          }
        },
      },

      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_: any, record: any) => {
          // const editable = true;
          const editable = String(record.id) === editingKey;
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.id)}
                style={{ marginRight: 8 }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
          );
        },
      },
    ];

    setColumns(column);
    // return <div>
    //   <Table columns={columns} dataSource={dataSource} />
    // </div>
  };
  // 用户配置
  const renderUsers = () => {
    const column = [
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: '积分',
        dataIndex: 'point',
        key: 'point',
        editable: true,
      },
      {
        title: '章节进度',
        dataIndex: 'chapterId',
        key: 'chapterId',
        editable: true,
      },
      {
        title: '关卡',
        dataIndex: 'checkpoint',
        key: 'checkpoint',
        editable: true,
        render: (val: any) => <span>第{val}关</span>,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_: any, record: any) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{ marginRight: 8 }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
          );
        },
      },
    ];
    setColumns(column);
  };
  // 成就配置

  const renderAchieve = () => {
    const column = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
        editable: true,
      },
      {
        title: '解锁所需答题次数',
        dataIndex: 'number',
        key: 'number',
        editable: true,
      },
      {
        title: '游戏模式',
        dataIndex: 'modeID',
        key: 'modeID',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_: any, record: any) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{ marginRight: 8 }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
          );
        },
      },
    ];
    setColumns(column);
  };

  const mergedColumns = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  console.log(defaultMenuKey, editingKey);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={(val) => {
            console.log(val);
            setEditingKey('');
            setDefaultMenuKey(val?.key);
          }}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            关卡题目配置
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            游戏成就配置
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<FileOutlined />}
            // onClick={() => {

            //   getUserData()
            //   renderUsers()
            // }}
          >
            用户管理
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* {renderQuestions()} */}
            {/* <Table columns={columns} dataSource={dataSource} /> */}
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                bordered
                dataSource={dataSource}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                  onChange: cancel,
                }}
              />
            </Form>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
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

export default connect(mapStateToProps)(Admin);
