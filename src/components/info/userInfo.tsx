import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

import styles from './info.less';
import { Button, Popconfirm, Input, Form } from 'antd';
const { Search } = Input;

const UserInfo = ({ dispatch, user, loading }: any) => {
  const [changeUserName, setChangeUSerName] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    setUserName(user?.data?.name);
  }, [user?.data]);
  const getInfo = () => {
    dispatch({
      type: 'user/getUserInfo',
      payload: {},
    }).then((res: any) => {
      if (res && res.length > 0) {
        localStorage.setItem('user', JSON.stringify(res[0]));
        user = res[0];
      }
    });
  };

  const updateName = (name: string) => {
    dispatch({
      type: 'user/updateUserinfo',
      payload: {
        name: String(name),
      },
    }).then(() => {
      getInfo();
      setChangeUSerName(false);
    });
  };
  const deleteUser = () => {
    dispatch({
      type: 'user/deleteUser',
      payload: {},
    });
  };

  const renderItem = (title: string, desc: any) => {
    return (
      <div className={styles.item}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc || '-'}</div>
      </div>
    );
  };
  const onFinish = (value: any) => {
    updateName(value);
  };

  return (
    <div className={styles.userInfo}>
      {changeUserName ? (
        <div style={{ display: 'flex' }}>
          <Search
            //   placeholder={userName}
            defaultValue={userName}
            //   allowClear
            enterButton="确定"
            size="small"
            onSearch={onFinish}
          />
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          {renderItem('用户名', user?.data?.name)}
          <Button
            size="small"
            style={{ marginLeft: '8px' }}
            onClick={() => {
              setChangeUSerName(true);
            }}
          >
            修改用户名
          </Button>
        </div>
      )}

      {/* {renderItem('积分', user?.data?.point)} */}
      {renderItem(
        '目前进度',
        `第${user?.data?.chapterId || '-'}章-第${
          user?.data?.checkpoint || '-'
        }节`,
      )}

      <Popconfirm
        title="注销后用户信息将被清空，无法恢复。确定注销吗？"
        onConfirm={() => {
          deleteUser();
        }}
        okText="Yes"
        cancelText="No"
      >
        <Button size="small">注销用户信息</Button>
      </Popconfirm>
    </div>
  );
};
function mapStateToProps(state: any) {
  return {
    // loading: state.loading.models.questions,
    // user: state.user,
    ...state,
    // ...listSelector(state, ownProps),
  };
}
// export default UserInfo;
export default connect(mapStateToProps)(UserInfo);
