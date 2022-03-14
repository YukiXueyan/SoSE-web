
import {  SettingOutlined } from '@ant-design/icons';

import Achieve from '../components/info/achieve'

const MenuList = [
    {
        key: 'user',
        icon: <SettingOutlined />,
        title: '个人信息',
        component:<div>1</div>
    },
    {
        key: 'story',
        icon: <SettingOutlined />,
        title: '故事回顾',
        component:<div>2</div>
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
        component:<div>4</div>
    },
    {
        key: 'help',
        icon: <SettingOutlined />,
        title: '帮助中心',
        component:<div>5</div>
    },
    {
        key: 'about',
        icon: <SettingOutlined />,
        title: '关于',
        component:<div>6</div>
    },
]

module.exports = MenuList;