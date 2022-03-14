import React, { useState, useEffect } from 'react';

import styles from './info.less';
import {
  QuestionCircleOutlined,
} from '@ant-design/icons';
const Achieve = ({ }) => {
  const [options, setOptions] = useState([]);
  const [current_option, setCurrentOption] = useState(null);


  useEffect(() => {
  }, [])

  const renderItem = (item) => {
    return <div className={styles.item}>
      <div className={styles.left}>
      <QuestionCircleOutlined style={{fontSize:'32px', color:'#fff'}}/>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            一個成就
            </div>
            <div className={styles.desc}>
            成就简介......
            </div>
        </div>
    </div>
  }
  return (
    <div className={styles.achieve}>
      <div className={styles.box}>
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
        {renderItem('')}
      </div>
    </div>
  );
};

export default Achieve;
