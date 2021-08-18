import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Spin from '../Spin/index'
import Compare from '../Compare/index'

export default function Result() {
    const [error] = useState()
    const spinRef = useRef()
    const resetClick = () => {
        localStorage.removeItem('nameObj')
        localStorage.removeItem('isBtn')
        localStorage.removeItem('users')
    }

    return (
        <div style={{width:'60%', margin:'0 auto', display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Compare spinRef={spinRef} error={error} />
            </div>
            <button onClick={() => resetClick()} style={{margin:'100px auto 0', width:'200px', fontSize:'22px', lineHeight:'40px', cursor:'pointer'}}>
                <Link style={{textDecoration:'none', color:'#333', padding:'10px 55px'}} to='/battle'>RESET</Link>
            </button>
            <Spin spinRef={spinRef} />
        </div>
    )
}
