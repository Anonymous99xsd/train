import React, { useEffect, useRef } from 'react'
import { connect } from 'dva'
import './index.css'

const mapStateToProps = state => {
    return {
        data: state.data.data,
        sizes: state.data.sizes
    }
}

function Items(props) {
    const itemRef = useRef()
    const { dispatch } = props

    // 添加至购物车
    const addToCart = (good) => {
        dispatch({
            type: 'data/addToCart',
            payload: good
        })
    }

    useEffect(() => {
        if (itemRef.current) {
            props.getNum(itemRef.current.childNodes.length)
        }
    }, [props])

    if (!props.data) return null
    let list = props.data,
        size = props.sizes
    let sizeArr = Object.entries(size).filter(item => item[1] === true).map(v => v[0])

    return (
        <div ref={itemRef} className="item-container">
            {
                list.map((v, i) => {
                    for (let v of list[i].availableSizes) {
                        if (sizeArr.includes(v)) return (
                            <div className="item" key={list[i].id}>
                                <div className="item-title">免运费</div>
                                <div>
                                    <img className="item-img" src={require(`../../assets/${list[i].id}.jpg`)} alt="" />
                                </div>
                                <p className="item-name">{list[i].title}</p>
                                <p style={{marginBottom:'0'}}>尺码：{list[i].availableSizes.join(' , ')}</p>
                                <div className="item-price">
                                    <div className="val">
                                        <span>$</span>
                                        <b>{list[i].price.toString().split('.')[0]}</b>
                                        <span style={{fontSize:'16px'}}>.{((list[i].price.toString().split('.')[1] || '') + '00').substr(0, 2)}</span>
                                    </div>
                                    {
                                        list[i].installments !== 0 && <div className="installment">
                                            <span style={{fontSize:'16px'}}>或 {list[i].installments} x </span>
                                            <b style={{fontSize:'16px'}}>${(list[i].price / list[i].installments).toFixed(2)}</b>
                                        </div>
                                    }
                                </div>
                                <div onClick={() => addToCart(list[i])} className="item-btn">添加至购物车</div>
                            </div>
                        )
                    }
                    return null
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(Items)
