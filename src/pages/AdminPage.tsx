import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './adminPage.less';
import axios from 'axios';
import { Link } from 'umi';
import { URL } from '../utils/globalData';
import { stringify } from 'qs';

import { history } from 'umi';
import AdminLogin from '@/components/adminLogin/adminLogin';

// 1-问题，2-成就，3-用户
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
  Button,
  message,
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
              required: false,
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

  // const [isLogin, setIsLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const isEditing = (record: any) => String(record.id) === String(editingKey);

  const edit = (record: Partial<any> & { key: React.Key }) => {
    form.setFieldsValue({ ...record });
    setEditingKey(String(record?.id));
  };
  //删除
  const onDelete = (record: any) => {
    switch (defaultMenuKey) {
      case '1':
        dispatch({
          type: `questions/deleteQuestion`,
          payload: {
            id: record.id,
          },
        }).then(() => {
          getQData({ pageSize, pageNum });
          message.success('删除成功');
        });
        break;
      case '3':
        dispatch({
          type: `user/deleteUser`,
          payload: {
            id: record.id,
          },
        }).then(() => {
          getUserData();
          message.success('删除成功');
        });
        break;
      case '2':
        axios.delete(`${URL}/achieve/delete?id=${record.id}`).then(() => {
          getAData();
          message.success('删除成功');
        });

        break;
    }
  };

  const cancel = () => {
    setEditingKey('');
  };
  const save = async (val: any) => {
    try {
      const row = (await form.validateFields()) as any; // 输入框对象
      onUpdate(row, val);
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
    changeColumns();
    setDataSource([]);
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
  const onUpdate = (data: any, val: any) => {
    const newData = {
      ...val,
      ...data,
    };

    switch (defaultMenuKey) {
      case '1':
        dispatch({
          type: `questions/updateQuestion`,
          payload: newData,
        }).then(() => {
          getQData({ pageSize, pageNum });
          setEditingKey('');
        });
        break;
      case '3':
        axios.put(`${URL}/user/updateAdmin?${stringify(newData)}`).then(() => {
          getUserData();
          setEditingKey('');
        });
        break;
      case '2':
        axios.put(`${URL}/achieve/update?${stringify(newData)}`).then(() => {
          getAData();
          setEditingKey('');
        });

        break;
    }
    setEditingKey('');
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
        isAll: true,
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
        title: '操作',
        dataIndex: 'operation',
        render: (_: any, record: any) => {
          // const editable = true;
          const editable = String(record.id) === editingKey;
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record)}
                style={{ marginRight: 8 }}
              >
                保存
              </Typography.Link>
              <Popconfirm title="不保存就退出吗?" onConfirm={cancel}>
                <a>取消</a>
              </Popconfirm>
            </span>
          ) : (
            <span>
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}
                style={{ marginRight: 8 }}
              >
                编辑
              </Typography.Link>
              <Popconfirm
                title="确认删除吗?"
                onConfirm={() => onDelete(record)}
                onCancel={cancel}
              >
                <a>删除</a>
              </Popconfirm>
            </span>
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
        title: '操作',
        dataIndex: 'operation',
        render: (_: any, record: any) => {
          // const editable = true;
          const editable = String(record.id) === editingKey;
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record)}
                style={{ marginRight: 8 }}
              >
                保存
              </Typography.Link>
              <Popconfirm title="不保存就退出吗?" onConfirm={cancel}>
                <a>取消</a>
              </Popconfirm>
            </span>
          ) : (
            <span>
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}
                style={{ marginRight: 8 }}
              >
                编辑
              </Typography.Link>
              <Popconfirm
                title="确认删除吗?"
                onConfirm={() => onDelete(record)}
                onCancel={cancel}
              >
                <a>删除</a>
              </Popconfirm>
            </span>
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
        title: '属性',
        dataIndex: 'key',
        key: 'key',
        editable: true,
      },
      {
        title: '值',
        dataIndex: 'value',
        key: 'value',
        editable: true,
      },
      {
        title: '奖励',
        dataIndex: 'gift',
        key: 'gift',
        editable: true,
      },
      {
        title: '扩展信息',
        dataIndex: 'feature',
        key: 'feature',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (_: any, record: any) => {
          // const editable = true;
          const editable = String(record.id) === editingKey;
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record)}
                style={{ marginRight: 8 }}
              >
                保存
              </Typography.Link>
              <Popconfirm title="不保存就退出吗?" onConfirm={cancel}>
                <a>取消</a>
              </Popconfirm>
            </span>
          ) : (
            <span>
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}
                style={{ marginRight: 8 }}
              >
                编辑
              </Typography.Link>
              <Popconfirm
                title="确认删除吗?"
                onConfirm={() => onDelete(record)}
                onCancel={cancel}
              >
                <a>删除</a>
              </Popconfirm>
            </span>
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

  const onCreateItem = () => {
    if (defaultMenuKey === '3') {
      dispatch({
        type: `user/addUser`,
        payload: {},
      }).then((res: any) => {
        getUserData();
        message.success('新建成功');
      });
    } else {
      history.push(`/admin/detail?key=${defaultMenuKey}`);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={(val) => {
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
        </Menu>
      </Sider>
      {isLogin ? (
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: '0 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* {renderQuestions()} */}
              {/* <Table columns={columns} dataSource={dataSource} /> */}
              <Header
                className="site-layout-background"
                style={{ padding: '0 8', background: '#fff' }}
              >
                <Button onClick={onCreateItem}>新建</Button>
              </Header>
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
      ) : (
        <Layout className={styles.loginBox}>
          <AdminLogin setIsLogin={setIsLogin} />
        </Layout>
      )}
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
