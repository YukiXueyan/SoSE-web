import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './info.less';
import { List, Popconfirm, Button, Tag, message, Empty } from 'antd';
import {
  QuestionCircleOutlined,
  StarOutlined,
  StarFilled,
  SwapOutlined,
} from '@ant-design/icons';

import { unLockPoint } from '@/utils/globalData';
import { getUser } from '@/utils/getFuction';

const Note = (params: any) => {
  const { dispatch, user } = params;

  const [data, setData] = useState([]);
  const [isForkPage, setIsForkPage] = useState(false);

  const isLocked = (item: any) => String(item?.unlock) === '0';
  useEffect(() => {
    initData();
    getUser(dispatch);
  }, []);
  const initData = () => {
    dispatch({
      type: `wrongNote/list`,
      payload: {},
    }).then((res: any) => {
      setData(res?.data);
    });
  };

  const fork = (id: any) => {
    dispatch({
      type: `wrongNote/fork`,
      payload: {
        noteId: id,
      },
    }).then((res: any) => {
      message.success('收藏成功！');
      initData();
    });
  };
  const unfork = (id: any) => {
    dispatch({
      type: `wrongNote/unfork`,
      payload: {
        noteId: id,
      },
    }).then((res: any) => {
      message.success('取消收藏成功！');
      initData();
    });
  };
  const ondelete = (id: any) => {
    dispatch({
      type: `wrongNote/delete`,
      payload: {
        noteId: id,
      },
    }).then((res: any) => {
      message.success('删除成功');
      initData();
    });
  };

  const unlock = (id: any) => {
    const point = user.data?.point - unLockPoint;
    if (point < 0) {
      message.error('目前积分还不够哦');
      return;
    }
    dispatch({
      type: `user/addUserPoints`,
      payload: {
        point: point,
      },
    }).then(() => {
      dispatch({
        type: `wrongNote/unlock`,
        payload: {
          noteId: id,
        },
      }).then((res: any) => {
        message.success('解锁成功！');
        initData();
      });
      getUser(dispatch);
    });
  };

  const renderItem = (item: any) => {
    const optionList = JSON.parse(item?.options) || [];
    const optionStr = optionList.join('   ,   ');
    return (
      <div className={styles.item}>
        <div className={styles.content}>
          {/* {String(item?.type) === '1' && <Tag > {'单选'}</Tag>}
        {String(item?.type) === '2' && <Tag > {'多选'}</Tag>} */}
          {String(item?.type) === '3' && <Tag> {'判断'}</Tag>}
          {item?.question}
        </div>
        <div className={styles.options}>{optionStr}</div>
        <div className={styles.tools}>
          <div
            className={styles.left}
            style={isLocked(item) ? { visibility: 'hidden' } : {}}
          >
            正确答案：
            <Tag color="blue"> {item?.currentAnswer}</Tag>
          </div>
          <div className={styles.right}>
            {String(item?.isStar) === '1' && (
              <>
                <Button
                  type="text"
                  onClick={() => {
                    unfork(item?.noteId);
                  }}
                >
                  <StarFilled style={{ color: '#235fff' }} />
                  取消收藏
                </Button>
              </>
            )}
            {String(item?.isStar) !== '1' && (
              <>
                <Button
                  type="link"
                  onClick={() => {
                    fork(item?.noteId);
                  }}
                >
                  <StarOutlined style={{ color: '#235fff' }} />
                  收藏
                </Button>
              </>
            )}

            {isLocked(item) && (
              <Popconfirm
                title={`解锁需要消耗${unLockPoint}个积分哦`}
                cancelText={'取消'}
                okText={'确定'}
                onConfirm={() => {
                  unlock(item?.noteId);
                }}
                icon={<QuestionCircleOutlined />}
              >
                <Button type="link">解锁</Button>
              </Popconfirm>
            )}

            <Popconfirm
              title={`确认要删除吗？`}
              cancelText={'取消'}
              okText={'确定'}
              onConfirm={() => {
                ondelete(item?.noteId);
              }}
              icon={<QuestionCircleOutlined />}
            >
              <Button type="link">删除</Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.note}>
      <div>当前积分：{user?.data?.point}</div>
      <Button
        onClick={() => {
          // 筛选收藏
          setIsForkPage(!isForkPage);
        }}
      >
        <SwapOutlined />
        {isForkPage ? '收藏' : '全部'}
      </Button>
      <List
        dataSource={
          isForkPage
            ? data?.filter((item: any) => {
                return item?.isStar === 1;
              })
            : data
        }
        locale={{
          emptyText: '',
        }}
        renderItem={(item) => (
          <List.Item>
            {/* <Card title={item.title}>Card content</Card> */}
            {renderItem(item)}
          </List.Item>
        )}
      />
      {/* {data?.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />} */}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Note);
