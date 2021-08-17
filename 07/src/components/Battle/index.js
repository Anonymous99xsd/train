import React, { useState, useRef } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

export default function Battle() {
    const [isShow, setIsShow] = useState(localStorage.getItem('isBtn') || false)
    // 获取本地存储数据
    const [nameObj] = useState(JSON.parse(localStorage.getItem('nameObj')))
    // 控制头像实例显示
    const [isAvatar, setIsAvatar] = useState([false, false])
    const [img, setImg] = useState(new Array(2))
    const [name, setName] = useState(new Array(2))
    // 输入框实例
    const userRef1 = useRef()
    const userRef2 = useRef()
    // 查询头像方法
    const getAvatar = (username, index) => {
        // axios.get('https://api.github.com/users/' + username)
        //   .then(response => {
        //     let temp = img.slice()
        //     temp[index] = `https://avatars.githubusercontent.com/u/${response.data.id}?s=200&v=4`
        //     setImg(temp)
        //     let tempname = name.slice()
        //     tempname[index] = username
        //     setName(tempname)
        //   })
        //   .then(() => {
        //     let temp = isAvatar.slice()
        //     temp[index] = true
        //     setIsAvatar(temp)
        //   })
        //   .catch(error => {
        //     console.log('error', error.message);
        //   })
        let temp = img.slice()
        temp[index] = `https://github.com/${username}.png?size=200`
        setImg(temp)
        let tempname = name.slice()
        tempname[index] = username
        setName(tempname)
        let tempa = isAvatar.slice()
        tempa[index] = true
        setIsAvatar(tempa)
    }

    function clickHandle(e, num) {
        if (e.clientX === 0 || (e.keyCode && e.keyCode !== 13)) return
        let username = e.target.parentNode.childNodes[1].value
        if (username.trim() === '') return
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
        if (!index) {
        formik.values.user1 = ''
        userRef1.current.value = ''
        } else {
        formik.values.user2 = ''
        userRef2.current.value = ''
        }
    }

    // 表单
    const formik = useFormik({
        initialValues: {
        user1: nameObj?.user1 ?? '',
        user2: nameObj?.user2 ?? '',
        },
        onSubmit: v => {
        if (isAvatar[0] || isAvatar[1]) {
            setIsShow(true)
            localStorage.setItem('isBtn', true)
        }
        },
        validate: v => {
        localStorage.removeItem('isBtn')
        setIsShow(false)
        localStorage.setItem('nameObj', JSON.stringify(v))
        let error = {}
        if (!v.user1) error.message = '请输入用户名'
        return error
        }
    })

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
            <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
            <div>
                <h3 style={{textAlign:'center'}}>Player One</h3>
                <input onKeyDown={(e) => {clickHandle(e, 0)}} ref={userRef1} name="user1" type="text" defaultValue={formik.values.user1} onChange={formik.handleChange} />
                <button onClick={(e) => {clickHandle(e, 0)}} style={{marginLeft:'20px', cursor:'pointer'}} disabled={formik.values.user1.trim() === '' ? 'disabled' : ''} type="submit">SUBMIT</button>
            </div>
            <div>
                <h3 style={{textAlign:'center'}}>Player Two</h3>
                <input onKeyDown={(e) => {clickHandle(e, 1)}} ref={userRef2} name="user2" type="text" defaultValue={formik.values.user2} onChange={formik.handleChange} />
                <button onClick={(e) => {clickHandle(e, 1)}} style={{marginLeft:'20px', cursor:'pointer'}} disabled={formik.values.user2.trim() === '' ? 'disabled' : ''} type="submit">SUBMIT</button>
            </div>
            </div>
        </form>
        <div style={{width:'100%', position:'relative'}}>
            {
            isAvatar.map((v, i) => {
                return (
                <div key={i} style={{display:isAvatar[i] ? 'flex' : 'none', margin:'20px 0', position:'absolute', right:i === 1 ? '0' : '', alignItems:'center', fontSize:'28px', color:'#1890ff'}}>
                    <img style={{width:'64px', height:'64px', marginRight:'20px'}} src={img[i]} alt="" />
                    <div>{name[i]}</div>
                    <span onClick={() => {removeAvatar(i)}} style={{marginLeft:'15px',height:'36px',width:'36px',fontSize:'48px',display:'inline-block',borderRadius:'50%', color:'#fff',cursor:'pointer'}}>
                    <i style={{fontSize:'36px', position:'absolute',color:'red'}} className="fas fa-times-circle"></i>
                    </span>
                </div>
                )
            })
            }
        </div>
        <button style={{display:isShow ? 'block' : 'none', marginTop:'100px', width:'100px', height:'40px'}}>
            <Link style={{textDecoration:'none', color:'#333', padding:'12px 18px'}} to='/battle/result'>BATTLE</Link>
        </button>
        </div>
    )
}
