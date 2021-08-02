import React, { useState } from 'react'
import './index.css'

export default function Filters() {
    // 过滤尺码
    const [sizes] = useState(['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'])

    return (
        <div className="filters">
            <h4 className="title">尺码：</h4>
            {
                sizes.map((v, i) => {
                    return (
                        <div className="filters-btn" key={i}>
                            <label htmlFor={v}>
                                <input type="checkbox" value={v} id={v} />
                                <span className="checkmark">{v}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}
