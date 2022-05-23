/* eslint-disable no-debugger */
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

export default function Battle() {
    const [isShow, setIsShow] = useState(false)
    // 控制头像实例显示
    const [isAvatar, setIsAvatar] = useState([false, false])
    const [img, setImg] = useState(new Array(2))
    const [name, setName] = useState(new Array(2))
    const [error, setError] = useState()
    // 输入框实例
    const userRef1 = useRef()
    const userRef2 = useRef()
    const [isClick1, setIsClick1] = useState(false)
    const [isClick2, setIsClick2] = useState(false)
    //测试 form验证
    const formRule = ()=>{
        document.querySelector("#i-submit").click()
    }
    // 查询头像方法
    const getAvatar = (username, index) => {
        axios.get('https://api.github.com/users/' + username)
            .then(response => {
                let temp = img.slice()
                temp[index] = `https://avatars.githubusercontent.com/u/${response.data.id}?s=200&v=4`
                setImg(temp)
                let tempname = name.slice()
                tempname[index] = username
                setName(tempname)
            })
            .then(() => {
                let temp = isAvatar.slice()
                temp[index] = true
                setIsAvatar(temp)
                formRule()
            })
            .catch(error => {
                let temp = isAvatar.slice()
                temp[index] = true
                setIsAvatar(temp)
                setError(error.message)
                if (index) setIsClick2(false)
                else setIsClick1(false)
            })
    }

    function clickHandle(e, num) {
        if (e.clientX === 0 || (e.keyCode && e.keyCode !== 13)) return
        let username = e.target.parentNode.childNodes[1].value
        if (username.trim() === '') return
        if (isAvatar[num]) return
        if (num) setIsClick2(true)
        else setIsClick1(true)
        if (!num) {
            getAvatar(username, 0)
        } else {
            getAvatar(username, 1)
        }
    }

    function removeAvatar(index) {
        let temp = isAvatar.slice()
        temp[index] = false
        setIsAvatar(temp)
        setIsShow(false)
        let tempName = name.slice()
        tempName[index] = false
        setName(tempName)
        if (!index) {
            formik.values.user1 = ''
            userRef1.current.value = ''
            setIsClick1(false)
        } else {
            formik.values.user2 = ''
            userRef2.current.value = ''
            setIsClick2(false)
        }
    }

    // 表单
    const formik = useFormik({
        initialValues: {
            user1: '',
            user2: '',
        },
        onSubmit: () => {
            if (isAvatar[0] && isAvatar[1]) {
                setIsShow(true)
            }
        },
        validate: v => {
            setIsShow(false)
            let error = {}
            if (!v.user1) error.message = '请输入用户名'
            return error
        }
    })
    let isDisable1 = formik.values.user1.trim() === '' || isClick1 || isAvatar[0]
    let isDisable2 = formik.values.user2.trim() === '' || isClick2 || isAvatar[1]

    return (
        <div style={{width:'80%', display:'flex', flexDirection:'column', alignItems:'center', margin:'0 auto'}}>
            <h2>Instructions</h2>
            <div style={{width:'80%', display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h3 style={{textAlign:'center'}}>Enter two Github users</h3>
                    <i style={{color:'orange', width:'200px', height:'200px', backgroundColor:'#eee', display:'flex', justifyContent:'center', alignItems:'center'}} className="fas fa-users fa-8x">
                        <img src="" alt="" />
                    </i>
                </div>
                <div>
                    <h3 style={{textAlign:'center'}}>Battle</h3>
                    <i style={{color:'#666', width:'200px', height:'200px', backgroundColor:'#eee', display:'flex', justifyContent:'center', alignItems:'center'}} className="fas fa-fighter-jet fa-8x">
                        <img src="" alt="" />
                    </i>
                </div>
                <div>
                    <h3 style={{textAlign:'center'}}>See the winner</h3>
                    <i style={{color:'yellow', width:'200px', height:'200px', backgroundColor:'#eee', display:'flex', justifyContent:'center', alignItems:'center'}} className="fas fa-trophy fa-8x">
                        <img src="" alt="" />
                    </i>
                </div>
            </div>
            <h2 style={{marginTop:'100px'}}>Players</h2>
            <form style={{width:'100%'}} onSubmit={formik.handleSubmit}>
                <div style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
                    <div>
                        <h3 style={{textAlign:'center'}}>Player One</h3>
                        <input onKeyDown={(e) => {clickHandle(e, 0)}} ref={userRef1} name="user1" type="text" defaultValue={formik.values.user1} onChange={formik.handleChange} />
                        <button onClick={(e) => {clickHandle(e, 0)}} style={{marginLeft:'20px', cursor:isDisable1 ? 'not-allowed' : 'pointer'}} disabled={isDisable1 ? 'disabled' : ''}>SUBMIT</button>
                    </div>
                    <div>
                        <h3 style={{textAlign:'center'}}>Player Two</h3>
                        <input onKeyDown={(e) => {clickHandle(e, 1)}} ref={userRef2} name="user2" type="text" defaultValue={formik.values.user2} onChange={formik.handleChange} />
                        <button onClick={(e) => {
                            clickHandle(e, 1)
                        }} style={{marginLeft:'20px', cursor:isDisable2 ? 'not-allowed' : 'pointer'}} disabled={isDisable2 ? 'disabled' : ''} >SUBMIT</button>
                    </div>
                </div>
                <button id="i-submit"type="submit" style={{ display: 'none' }}></button>
            </form>
            <div style={{width:'74%', position:'relative'}}>
                {
                    isAvatar.map((v, i) => {
                        return (
                            <div key={i} style={{display:isAvatar[i] ? 'flex' : 'none', margin:'20px 0', position:'absolute', right:i === 1 ? '0' : '', alignItems:'center', fontSize:'28px', color:'#1890ff'}}>
                                {
                                    name[i] && <><img style={{width:'64px', height:'64px', marginRight:'20px'}} src={img[i]} alt="" />
                                    <div>{name[i]}</div></> || <p style={{color: 'red', fontSize:'14px'}}>{error}</p>
                                }
                                <span onClick={() => {removeAvatar(i)}} style={{marginLeft:'15px',height:'36px',width:'36px',fontSize:'48px',display:'inline-block',borderRadius:'50%', color:'#fff',cursor:'pointer'}}>
                                    <i style={{fontSize:'36px', position:'absolute',color:'red'}} className="fas fa-times-circle"></i>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <button style={{display:isShow ? 'block' : 'none', marginTop:'100px', width:'100px', height:'40px'}}>
                <Link style={{textDecoration:'none', color:'#333', padding:'12px 18px'}} to={`/battle/result?user1=${name[0]}&user2=${name[1]}`}>BATTLE</Link>
            </button>
        </div>
    )
}
