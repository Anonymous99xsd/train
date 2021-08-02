import React from 'react'
import './index.css'
import { Menu, Dropdown } from 'antd'
import 'antd/dist/antd.css';
import Items from '../Items/index'

function Shelf() {
    // 下拉组件
    const menu = (
        <Menu>
            <Menu.Item key="0">点击选择</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">价格从低到高</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">价格从高到低</Menu.Item>
        </Menu>
    )

    return (
        <div className="container">
            <div className="header">
                <span className="information">共查找到 16 件商品。</span>
                <div className="sort">
                    根据&nbsp;&nbsp;
                    <Dropdown overlay={menu} trigger={['click']}>
                        <span className="select ant-dropdown-link" onClick={e => e.preventDefault()}>
                        点击选择 </span>
                    </Dropdown>
                    &nbsp;&nbsp;排序
                </div>
            </div>
            <Items />
        </div>
    )
}

export default Shelf