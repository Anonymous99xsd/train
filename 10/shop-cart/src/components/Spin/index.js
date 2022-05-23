import React from 'react'
import './index.css'

export default function Spin({ isSpin }) {
    return (
        <div style={{display:isSpin ? 'flex' : 'none'}} className="spinContainer">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )
}
