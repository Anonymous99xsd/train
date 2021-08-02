import React, { useEffect } from 'react'
import { connect } from 'dva'
import './index.css'

const mapStateToProps = state => {
    return {
        data: state.data.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDidMount: () => {
            dispatch({
                type: 'data/getListHttp'
            })
        }
    }
}

function Items(props) {
    // 发送请求
    useEffect(() => {
        props.onDidMount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // 加载静态图片


    if (!props.data) return null
    let list = props.data
    console.log(list);

    return (
        <div className="item-container">
            {
                list.map((v, i) => {
                    return (
                        <div className="item" key={list[i].id}>
                            <div className="item-title">Free shipping</div>
                            <div>
                                <img className="item-img" src={require(`../../assets/${i + 1 < 10 ? '0' + (i + 1) : i + 1}.jpg`)} alt="" />
                            </div>
                            <p className="item-name">{list[i].title}</p>
                            <div className="item-price">
                                <div className="val">
                                    <span>$</span>
                                    <b>{list[i].price.toString().split('.')[0]}</b>
                                    <span style={{fontSize:'16px'}}>.{list[i].price.toString().split('.')[1] || '00'}</span>
                                </div>
                                <div className="installment">
                                    <span style={{fontSize:'16px'}}>or {list[i].installments} x </span>
                                    <b style={{fontSize:'16px'}}>${(list[i].price / list[i].installments).toFixed(2)}</b>
                                </div>
                            </div>
                            <div className="item-btn">Add to cart</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)