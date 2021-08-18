import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Spin({ spinRef }) {
    return (
        <div ref={spinRef} className="spin">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}
