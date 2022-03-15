import React, {useEffect, useState}  from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import MainIndex from '../components/MainIndex/MainIndex'
import TopNav from '../components/TopNav/TopNav';
import { message } from 'antd';

const modeBtnList = [
  '/endlessMode',
  'testMode',
  'testMode'
]
const IndexPage = ({dispatch, products}) => {

  const [userModeList, setUserModeList] = useState([]);
  function addNewUser() {
    dispatch({
      type: 'user/addUser',
    }).then(res=>{
      if(res && res.length>0){
        localStorage.setItem('userId',res[0].id)
        localStorage.setItem('user',JSON.stringify(res[0]))

      }

    });
  }
  function getUser() {
    dispatch({
      type: 'user/getUserInfo',
      payload:{}
    }).then(res=>{
      if(res && res.length>0){
        localStorage.setItem('userId',res[0].id)
        localStorage.setItem('user',JSON.stringify(res[0]))
      }
    });

    dispatch({
      type: 'user/getUSerMode',
      payload:{}
    }).then(res=>{
      if(res && res.length>0){
        setUserModeList(res)
      }
    });
  }
  useEffect(() => {
    
    const userId = localStorage.getItem('userId')
    if (userId){
      getUser()
    } else {
      addNewUser()
    }
  },[])

  const lockedBtn = () => {
    message.open({
      content:'该模式未解锁，请继续努力哦~'
    })
    return false;
  }
  const renderModeListBtn = () => {
    const btns = [];
    userModeList.map((item, index) => {
      if(item.feature){
        const btn =  <a href={modeBtnList[index]} className={styles.box2}>{item.name}</a>
        btns.push(btn);
      }else{
        const btn =  <div className={styles.box2} onClick={lockedBtn}>{item.name}</div>
        btns.push(btn);
      }
    })
    return btns;
  }
  return (
    <div className={styles.normal}>
      <TopNav isIndex={true}/>
      <MainIndex />
      <div className={styles.box}>

      <a href="/game" className={styles.box2}>Getting Started</a>
      {renderModeListBtn()}
      </div>
    </div>
  );
}

// IndexPage.propTypes = {
// };

export default connect(({ products }) => ({
  products,
}))(IndexPage);
