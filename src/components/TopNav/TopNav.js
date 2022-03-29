import React, { useEffect } from 'react';

import styles from './TopNav.less';
import { Menu, Dropdown, Button } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';

const TopNav = ({ isIndex, title, onClickHandle }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/info?key=user">
          个人信息
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/info?key=story">
          故事回顾
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/info?key=achieve">
          成就列表
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/info?key=record">
          游戏记录
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/info?key=note">
          收集
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/info?key=about">
          关于
        </a>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {}, []);
  return (
    <div className={styles.topnav} onClick={onClickHandle}>
      <div style={isIndex ? { visibility: 'hidden' } : {}}>
        <a href={'/'}>返回首页</a>
      </div>

      <div className={styles.title}>{title}</div>

      <Dropdown overlay={menu} placement="bottomRight">
        <Button>
          <AlignRightOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

TopNav.propTypes = {};

export default TopNav;
