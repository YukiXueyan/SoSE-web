import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

import styles from './info.less';
import {
  // QuestionCircleOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
// import { IconStar } from ''
import QueueAnim from 'rc-queue-anim';
import { message } from 'antd';

const Achieve = (params: any) => {
  const { dispatch, questions, loading, user } = params;
  const [achieveList, setAchieveList] = useState([]);

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    dispatch({
      type: `user/getUserAchieve`,
      payload: {},
    }).then((res: any) => {
      setAchieveList(res);
    });
  };

  const getAchievePrize = (item: any) => {
    const point = user.data?.point + item?.gift;
    dispatch({
      type: `user/unlockUserAchievePrize`,
      payload: {
        id: item?.user_aid,
      },
    }).then(() => {
      dispatch({
        type: `user/addUserPoints`,
        payload: {
          point: point,
        },
      });
      initData();
      message.success('领取奖励成功(๑•̀ㅂ•́)و✧');
    });
  };

  const renderItem = (item: any) => {
    return (
      <div className={styles.item} key={item?.id}>
        <div className={styles.left}>
          <div className={styles.icon}>
            {item?.userId ? (
              <>
                {item?.isGetPride ? (
                  <img
                    src={require('@/assets/star.svg')}
                    style={{ width: '100%' }}
                  />
                ) : (
                  <img
                    src={require('@/assets/Gift.png')}
                    // style={{ width: '100%' }}
                    className={styles.gift}
                    onClick={() => {
                      getAchievePrize(item);
                    }}
                  />
                )}
              </>
            ) : (
              <QuestionOutlined
                style={{ fontSize: '4rem', color: '#adb5bd' }}
              />
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            {/* {item?.userId ? item?.name : '也许这是一个秘密'} */}
            {item?.name}
          </div>
          <div className={styles.desc}>
            {/* {item?.userId ? item?.desc : '继续玩下去就知道了'} */}
            {item?.desc}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.achieve}>
      <QueueAnim
        className={styles.box}
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
      >
        {achieveList?.length && (
          <>{achieveList?.map((item: any) => renderItem(item))}</>
        )}
      </QueueAnim>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Achieve);
