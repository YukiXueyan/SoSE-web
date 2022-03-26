import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

import styles from './info.less';
import {
  // QuestionCircleOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
// import { IconStar } from ''

const Achieve = (params: any) => {
  const { dispatch, questions, loading } = params;
  const [achieveList, setAchieveList] = useState([]);

  useEffect(() => {
    console.log('params', params);
    dispatch({
      type: `user/getUserAchieve`,
      payload: {},
    }).then((res: any) => {
      setAchieveList(res);
    });
  }, []);
  console.log(params);

  const renderItem = (item: any) => {
    return (
      <div className={styles.item}>
        <div className={styles.left}>
          <div className={styles.icon}>
            {item?.userId ? (
              <img
                src={require('@/assets/star.svg')}
                style={{ width: '100%' }}
              />
            ) : (
              <QuestionOutlined
                style={{ fontSize: '4rem', color: '#adb5bd' }}
              />
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            {item?.userId ? item?.name : '也许这是一个秘密'}
          </div>
          <div className={styles.desc}>
            {item?.userId ? item?.desc : '继续玩下去就知道了'}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.achieve}>
      <div className={styles.box}>
        {achieveList?.length && (
          <>{achieveList?.map((item: any) => renderItem(item))}</>
        )}
        {achieveList?.length === 0 && <div>empty</div>}
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Achieve);
