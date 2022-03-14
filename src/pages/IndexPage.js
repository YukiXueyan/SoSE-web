import React  from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import MainIndex from '../components/MainIndex/MainIndex'
import TopNav from '../components/TopNav/TopNav';

const IndexPage = ({dispatch, products}) => {
  // function handleDelete() {
  //   dispatch({
  //     type: 'questions/queryInitCards',
  //     payload: 1,
  //   });
  // }

  return (
    <div className={styles.normal}>
      <TopNav isIndex={true}/>
      <MainIndex />
      <div className={styles.box}>

      <a href="/game" className={styles.box2}>Getting Started</a>
      <a href="/endlessMode"className={styles.box2}>无尽模式</a>
      <a href="/testMode"className={styles.box2}>测试模式</a>
      <a href="/testMode"className={styles.box2}>限时模式</a>
      </div>
    </div>
  );
}

// IndexPage.propTypes = {
// };

export default connect(({ products }) => ({
  products,
}))(IndexPage);
