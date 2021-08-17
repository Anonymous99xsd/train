import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
          <ul style={{display:'flex', listStyle:'none'}}>
            <li className="navHover" style={{margin:'0 20px', cursor:'pointer', fontSize:'18px', fontWeight:700}}>
              <NavLink style={{textDecoration:'none'}} activeStyle={{color:'red'}} to="/home">Popular</NavLink>
            </li>
            <li className="navHover" style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
              <NavLink exact style={{textDecoration:'none'}} activeStyle={{color:'red'}} to="/battle">Battle</NavLink>
            </li>
          </ul>
        </div>
      )
}
