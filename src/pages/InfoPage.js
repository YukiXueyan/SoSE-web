/* eslint-disable jsx-a11y/href-no-hash */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './InfoPage.less';
import TopNav from '../components/TopNav/TopNav';
import { Menu } from 'antd';
import {  SettingOutlined } from '@ant-design/icons';
import Achieve from '../components/info/achieve';
import UserInfo from '../components/info/userInfo';
import Story from '../components/info/Story';
import Record from '../components/info/record';
import Help from '../components/info/Help';
import About from '../components/info/About';

import queryString from 'query-string';
import { history } from 'umi';
const MenuList = [
    {
        key: 'user',
        icon: <SettingOutlined />,
        title: '个人信息',
        component:<UserInfo/> 
    },
    {
        key: 'story',
        icon: <SettingOutlined />,
        title: '故事回顾',
        component:<Story />
    },
    {
        key: 'achieve',
        icon: <SettingOutlined />,
        title: '成就列表',
        component:<Achieve />
    },
    {
        key: 'record',
        icon: <SettingOutlined />,
        title: '游戏记录',
        component:<Record />
    },
    {
        key: 'about',
        icon: <SettingOutlined />,
        title: '关于',
        component:<About />
    },
]
// import MenuList as List from '../config/MenuList'

// const namespace = 'questions';

const Info = ({ dispatch, questions, loading }) => {
    const [title, setTitle] = useState('');
    const [rightNode, setRightNode] = useState(<div></div>);

    useEffect(() => {
        const query = window.location.search
        const { key } = queryString.parse(query)

        const obj = MenuList.find(i => {return i.key === key}) || MenuList[0]
        setTitle(obj.title)
        setRightNode(obj.component)



    }, [])
    //   function getData(amount) {
    //     dispatch({
    //       type: `${namespace}/getQuestions`,
    //       payload: {
    //         amount,
    //         category: 18
    //       },
    //     });
    //   }
    // useEffect(() => {
    //   getData(amount)
    // },[])
    function handleClick(e) {
        // console.log('click', e);
        const obj = MenuList.find(i => {return i.key === e.key})
        setTitle(obj.title)
        setRightNode(obj.component)
        history.push({
            pathname: '/info',
            query: {
              key: e.key
            }
          })
    }
    return (
        <div className={styles.box}>
            <TopNav title={title} />
            {/* {loading && loading.global ? <div>
        loading...
        <LoadingOutlined />
      </div>:<QuestionList questionList={questions.data} />} */}

            <div className={styles.container}>
                <div className={styles.left}>
                    <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
                        {
                            MenuList.map(item => <Menu.Item key={item.key} icon={item.icon}>{item.title}</Menu.Item>)
                        }
                    </Menu>
                </div>
                <div className={styles.right}>
                    {rightNode}
                </div>
            </div>

        </div>
    );
};

function mapStateToProps(state) {
    // const questions = state.questions.data;
    return {
        // loading: state.loading.models.questions,
        // questions
        ...state
        // ...listSelector(state, ownProps),
    };
}

export default connect(mapStateToProps)(Info);
// export default connect(({ questions }) => ({
//   questions,
// }))(Info);