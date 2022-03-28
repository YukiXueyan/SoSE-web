import React, { useEffect } from 'react';

import styles from './info.less';
// import {
//   QuestionCircleOutlined,
// } from '@ant-design/icons';
const About = ({}) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.about}>
      <p>开发者：qxy</p>
      <p>希望这个小游戏可以帮助你更好更快理解软件工程~</p>
      <p>当前版本：1.0.0</p>
    </div>
  );
};

export default About;
