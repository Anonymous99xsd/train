import React, { useState } from 'react'
import './index.css'
import { Menu, Dropdown } from 'antd'
import { connect } from 'dva'
import 'antd/dist/antd.css';
import Items from '../Items/index'
import Spin from '../Spin/index'

const mapStateToProps = state => {
    return {
        data: state.products.data,
        sizes: state.products.sizes,
        error: state.products.error,
        isSpin: state.products.isSpin
    }
}

function Shelf(props) {
    // 存储当前展示的个数
    const [quantity, setQuantity] = useState(0)
    // 存储排序方式
    const [sortWay, setSortWay] = useState('点击选择')

    // 点击排序
    const sortItem = (e) => {
        if (e.key === '0') {
            setSortWay('默认排序')
        } else if (e.key === '1') {
            setSortWay('价格从低到高')
        } else if (e.key === '2') {
            setSortWay('价格从高到低')
        }
        const { dispatch } = props
        dispatch({
            type: 'products/sortCarts',
            payload: {
                key: e.key
            }
        })
    }

    // 下拉组件
    const menu = (
        <Menu onClick={(e) => sortItem(e)}>
            <Menu.Item key="0">默认排序</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">价格从低到高</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">价格从高到低</Menu.Item>
        </Menu>
    )

    const getNum = (len) => {
        setQuantity(len)
    }

    return (
        <div className="container">
            <div className="header">
                <span className="information">共查找到 { quantity } 件商品。</span>
                <div className="sort">
                    根据&nbsp;&nbsp;
                    <Dropdown overlay={menu} trigger={['click']}>
                        <span className="select ant-dropdown-link" onClick={e => e.preventDefault()}> {sortWay} </span>
                    </Dropdown>
                    &nbsp;&nbsp;排序
                </div>
            </div>
            <Items getNum={getNum} />
            <h1 style={{display: props.error === null ? 'none' : 'block', color: 'red'}}>数据获取失败: {props.error && props.error.toString()}</h1>
            <Spin isSpin={props.isSpin} />
        </div>
    )
}

export default connect(mapStateToProps)(Shelf)
