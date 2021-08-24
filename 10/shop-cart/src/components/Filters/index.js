import React, { useState } from 'react'
import './index.css'
import { connect } from 'dva'

const mapStateToProps = state => {
    return {
        sizes: state.data.sizes
    }
}

function Filters(props) {
    // 是否开启过滤
    const [isFilter, setIsFilter] = useState(true)

    // 选择过滤尺码
    function chooseSize(sizeName, bool) {
        const { dispatch, sizes} = props
        let obj = JSON.parse(JSON.stringify(sizes))
        let len = Object.values(obj).filter(v => v === false).length
        if (!len && isFilter) {
            for (let name in obj) {
                if (name === sizeName) continue
                obj[name] = false
            }
            setIsFilter(false)
        } else {
            for (let name in obj) {
                if (name === sizeName) {
                    obj[name] = !bool
                }
            }
        }
        if (Object.values(obj).filter(v => v === true).length === 0) {
            for (let name in obj) {
                obj[name] = true
            }
            setIsFilter(true)
        }
        
        dispatch({
            type: 'data/filterSize',
            payload: {
                sizes: obj
            }
        })
    }

    return (
        <div className="filters">
            <h4 className="title">尺码：</h4>
            {
                props.sizes && Object.entries(props.sizes).map((arr, i) => {
                    return (
                        <div className="filters-btn" key={i}>
                            <label htmlFor={arr[0]}>
                                <input type="checkbox" value={arr[0]} id={arr[0]} />
                                <span onClick={() => {chooseSize(arr[0], arr[1])}} className="checkmark">{arr[0]}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(Filters)
