/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toggle from '../toggle'

export default function Compare({ spinRef }) {
    // 对比用户数据
    const [usersname] = useState(window.location.hash.split('?')[1].split('&').map((v) => v.split('=')[1]) || [])
    const [users, setUsers] = useState([])
    const [error, setError] = useState()

    // 获取用户数据
    const getUser = (name) => {
        console.log(users);
        axios.get('https://api.github.com/users/' + name)
        .then(response => {
            let tempArr = users
            tempArr.push(response.data)
            console.log([...tempArr]);
            setUsers([...tempArr])
            localStorage.setItem('users', JSON.stringify(tempArr))
            toggle(spinRef, false)
        })
        .catch(error => {
            console.log(new Error('用户搜索失败', error))
            setError(error)
            toggle(spinRef, false)
        })
    }
    
    // 调用用户查询接口
    useEffect(() => {
        toggle(spinRef, true)
        if (!usersname[0] || !usersname[1]) {
        window.location.href = '/#/battle'
        localStorage.removeItem('nameObj')
        localStorage.removeItem('isBtn')
        localStorage.removeItem('users')
        }
        getUser(usersname[0])
        getUser(usersname[1])
    }, [])

    return (
        (users.length === 2 && users?.map((item, index) => {
        const bool = users[0].public_gists + users[0].public_repos >= users[1].public_gists + users[1].public_repos
        const boolArr = [bool, !bool]
        return (
            <div style={{backgroundColor:'#eee', display:'flex', flexDirection:'column', alignItems:'center', padding:'15px 20px'}} key={item.id}>
            <h2>{boolArr[index] ? 'Winner' : 'loser'}</h2>
            <img style={{display:'block', width:'200px', height:'200px'}} src={item.avatar_url || require('../../assets/default.webp').default} alt="" />
            <h3>Score: {item.public_repos + item.public_gists}</h3>
            <h2 style={{marginTop:'0', color:'#2091f9'}}>{item.name}</h2>
            <div style={{width:'100%', textAlign:'left', marginBottom:'20px'}}>
                <dd>
                <i style={{marginRight:'14px'}} className="fa fa-location-arrow"></i>
                {item.location}
                </dd>
                <dd>
                <i style={{marginRight:'10px'}} className="fa fa-group"></i>
                {item.followers}
                </dd>
                <dd>
                <i style={{marginRight:'10px'}} className="fa fa-user-plus"></i>
                {item.following}
                </dd>
                <dd>
                <i style={{marginRight:'10px'}} className="fa fa-code"></i>
                {item.public_repos}
                </dd>
            </div>
            </div>
        )
        })) || (
        <div>
            <h1 style={{color:'red'}}>ERROR: 数据获取失败</h1>
            <p style={{color:'red'}}>错误信息: {error?.toString()}</p>
        </div>
        )
    )
}
