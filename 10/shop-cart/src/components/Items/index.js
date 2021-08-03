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

    useEffect(() => {
        if (itemRef.current) {
            props.getNum(itemRef.current.childNodes.length)
        }
    }, [props])

    if (!props.data) return null
    let list = props.data,
        size = props.sizes
    let sizeArr = Object.entries(size).filter(item => item[1] === true).map(v => v[0])
    console.log('size', sizeArr, list);

    return (
        <div ref={itemRef} className="item-container">
            {
                list.map((v, i) => {
                    for (let v of list[i].availableSizes) {
                        if (sizeArr.includes(v)) return (
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
                    }
                    return null
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(Items)
