/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import './index.css'
import { connect } from 'dva'
import { Modal, message, notification } from 'antd'
import 'antd/dist/antd.css';

const mapStateToProps = state => {
    // console.log('float', state);
    return {
        shopCart: state.cart.shopCart,
        isEject: state.cart.isEject
    }
}

function Float(props) {
    const { dispatch, isEject, shopCart } = props
    // 存储商品数量
    const [quantity, setQuantity] = useState(0)
    // 总价
    const [totalPrice, setTotalPrice] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false);

    // 按钮实例
    const boxRef = useRef()
    const ctlRef = useRef()
    const quantityRef = useRef()
    const openRef = useRef()
    const delRef = useRef()

    // 警告提示
    const openNotificationWithIcon = type => {
        notification[type]({
          message: '购物车是空的',
          description: '你需要添加一些商品到购物车',
        });
      };

    // 打开购物车
    const openFloat = () => {
        // console.log('openFloat', isEject);
        dispatch({type: 'cart/openShop'})
        boxRef.current.classList.add('float-open')
        ctlRef.current.style.display = 'none'
        openRef.current.style.display = 'inline-block'
    }

    // 关闭购物车
    const closeFloat = () => {
        // console.log('closeFloat', isEject);
        dispatch({ type: 'cart/closeShop' })
        boxRef.current.classList.remove('float-open')
        openRef.current.style.display = 'none'
        ctlRef.current.style.display = 'inline-block'
    }

    // 删除购物车中的商品
    const deleteCart = (id) => {
        dispatch({
            type: 'cart/deleteCart',
            payload: id
        })
    }

    // 合计分期
    const totalInstallment = (totalPrice) => {
        if (totalPrice - 0 === 0) return null
        return (
            <span style={{fontSize:'16px'}}>OR UP TO 9 x $ {(totalPrice / 9).toFixed(2)}</span>
        )
    }

    // 减少一个商品
    const subtrack = (id) => {
        dispatch({
            type: 'cart/subtrackGood',
            payload: id
        })
    }

    // 增加一个商品
    const add = (id) => {
        dispatch({
            type: 'cart/addOneGood',
            payload: id
        })
    }

    // 清空购物车
    const clearAllGoods = () => {
        if (!shopCart.length) {
            openNotificationWithIcon('warning')
            return
        }
        setIsModalVisible(true);
    }

    // 绑定移入移出事件
    useEffect(() => {
        let cross = document.querySelectorAll('.float-item-del')
        if (cross.length) {
            for (let item of cross) {
                item.addEventListener('mouseenter', function(e) {
                    e.target.parentNode.style.backgroundColor = '#0c0b10'
                    e.target.parentNode.childNodes[3].childNodes[0].style.textDecoration = 'line-through'
                    e.target.parentNode.childNodes[3].childNodes[1].style.textDecoration = 'line-through'
                    e.target.parentNode.childNodes[4].childNodes[0].style.textDecoration = 'line-through'
                    e.target.style.color = '#fff'
                })
                item.addEventListener('mouseleave', function(e) {
                    e.target.parentNode.style.backgroundColor = '#1b1a20'
                    e.target.parentNode.childNodes[3].childNodes[0].style.textDecoration = 'none'
                    e.target.parentNode.childNodes[3].childNodes[1].style.textDecoration = 'none'
                    e.target.parentNode.childNodes[4].childNodes[0].style.textDecoration = 'none'
                    e.target.style.color = '#000'
                })
            }
        }
    }, [props])

    // 计算属性
    useEffect(() => {
        // 数量
        let num = (shopCart || []).reduce((pre, cur) => {
            return pre + cur.quantity
        }, 0)
        setQuantity(num)
        // 总价
        let total = (shopCart || []).reduce((pre, cur) => {
            return pre + cur.quantity * cur.price
        }, 0)
        setTotalPrice(total.toFixed(2))
    }, [props])

    // 弹出购物车
    useEffect(() => {
        if (isEject) openFloat()
        else closeFloat()
    }, [props.isEject])

    // 储存购物车数据
    const [init, setInit] = useState(false)
    useEffect(() => {
        if (!init) {
            setInit(true)
        } else {
            localStorage.setItem('shopCart', JSON.stringify(props.shopCart))
        }
    }, [props.shopCart])

    const handleOk = () => {
        setIsModalVisible(false);
        message.success('购买成功')
        dispatch({
            type: 'cart/clearShopCart'
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div ref={boxRef} className="float-cart">
            <span onClick={() => openFloat()} ref={ctlRef} className="float-control float-control-close">
                <span ref={quantityRef} className="cart-quantity">{quantity}</span>
            </span>
            <div onClick={() => closeFloat()} ref={openRef} className="float-control float-control-open">×</div>
            <div className="float-container">
                <div className="float-header">
                    <span className="float-bag">
                        <span className="cart-quantity offset">{quantity}</span>
                    </span>
                    <span className="header-title">购物车</span>
                </div>
                <div className="float-content">
                    {
                        (!shopCart?.length && <p>购物车是空的<br />🚚</p>) || shopCart.map((v, i) => {
                            return (
                                <div key={v.id} className="float-item">
                                    <i ref={delRef} onClick={() => deleteCart(v.id)} className="float-item-del fas fa-times"></i>
                                    <div></div>
                                    <div className="float-item-image">
                                        <img src={require(`../../assets/${v.id}.jpg`)} alt="" />
                                    </div>
                                    <div className="float-item-details">
                                        <p className="float-item-title">{v.title}</p>
                                        <p className="float-item-content">
                                            {v.availableSizes[0]} | {v.style}
                                            <br />
                                            Quantity: {v.quantity}
                                        </p>
                                    </div>
                                    <div className="float-item-price">
                                        <p>$ {parseFloat(v.price + (v.price.toString().split('.')[1] === undefined ? '.00' : '00' )).toFixed(2)}</p>
                                        <div>
                                            <button onClick={() => subtrack(v.id)} disabled={v.quantity === 1 ? 'disbaled' : ''} className="subtrack">-</button>
                                            <button onClick={() => add(v.id)} className="add">+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="float-footer">
                    <div className="subtotal">合计</div>
                    <div className="sub-price">
                        <p className="sub-val">$ {totalPrice}</p>
                        <small className="sub-installment">
                            {totalInstallment(totalPrice)}
                        </small>
                    </div>
                    <div onClick={clearAllGoods} className="bought">支付</div>
                    <Modal title="提示" okText="确认提交" cancelText="我再想想" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>共计 {totalPrice} 美元</p>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Float)