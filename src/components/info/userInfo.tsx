import React, { useState, useEffect } from 'react';

import styles from './info.less';
import { Descriptions } from 'antd';

const UserInfo = ({ }) => {
    const [options, setOptions] = useState([]);
    const [current_option, setCurrentOption] = useState(null);


    useEffect(() => {
    }, [])

    const renderItem = (title:string, desc:any) => {
        return <div className={styles.item}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.desc}>
                {desc}
            </div>
        </div>
    }
    return (
        <div className={styles.userInfo}>
            {renderItem('用户名','邱雪雁')}
            {renderItem('积分',922)}
            {renderItem('游戏次数',20)}
            {renderItem('游戏天数',4)}
        </div>
    );
};

export default UserInfo;
