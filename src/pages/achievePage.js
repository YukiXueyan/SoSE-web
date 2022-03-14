import React  from 'react';
import { connect } from 'dva';
// import styles from './achievePage.less';
// import MainIndex from '../components/MainIndex/MainIndex'
// import TopNav from '../components/TopNav/TopNav';
// import { Button } from 'antd'

const AchievePage = ({dispatch, products}) => {
  // function handleDelete() {
  //   dispatch({
  //     type: 'questions/queryInitCards',
  //     payload: 1,
  //   });
  // }

  return (
    <div>成就</div>
  );
}


export default connect(({ products }) => ({
  products,
}))(AchievePage);
