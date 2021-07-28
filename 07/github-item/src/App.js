import React, { useState, useRef } from 'react'
import axios from 'axios'
import InfinityScroll from 'react-infinite-scroller'
import { BrowserRouter, Route } from 'react-router-dom'
import { useFormik } from 'formik'
import './App.css';

function App() {
  // 图片数据
  const [data, setData] = useState([])
  // 加载页数
  const [count, setCount] = useState(1)
  // 控制能否加载
  const [hasMore] = useState(window.location.pathname === '/' ? true : false)
  // 存储当前页面路径
  const [path] = useState(window.location.pathname)
  
  // 输入框实例
  const userRef1 = useRef()
  const userRef2 = useRef()

  // useEffect(() => {
  //   loadMoreData()
  // }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  function loadMoreData() {
    axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${count}`)
    .then(response => {
      console.log(response.data.items);
      setData([...data, ...response.data.items])
      setCount(count + 1)
    })
    .catch(error => {
      console.log(error);
    })
  }

  function Item () {
    return (
      data.map((item, index) => {
        return (
          <div className="items" key={item.id} style={{width:'22%', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#eee', margin:'10px auto'}}>
            <h2>#{index + 1}</h2>
            <img style={{display:'block', width:'160px', height:'160px'}} src={item.owner.avatar_url} alt="" />
            <h4 style={{color:'red'}}>{item.name}</h4>
            <div style={{width:'100%', textAlign:'left', marginBottom:'20px'}}>
              <dd style={{marginLeft:'40px', maxWidth:'80%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                <i style={{marginRight:'10px'}} className="fas fa-address-card"></i>
                {item.name}
              </dd>
              <dd style={{marginLeft:'40px'}}>
                <i style={{marginRight:'10px'}} className="fas fa-star"></i>
                {item.size} stars
              </dd>
              <dd style={{marginLeft:'42px'}}>
                <i style={{marginRight:'14px'}} className="fas fa-code-branch"></i>
                {item.forks} forks
              </dd>
              <dd style={{marginLeft:'42px'}}>
                <i style={{marginRight:'14px'}} className="fas fa-code-branch"></i>
                {item.open_issues} open issues
              </dd>
            </div>
          </div>
        )
      })
    )
  }

  // 导航栏
  function Nav() {
    return (
      <div>
        <ul style={{display:'flex', listStyle:'none'}}>
          <li style={{margin:'0 20px', cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <a style={{textDecoration:'none', color:path === '/' ? 'red' : '#000'}} href="/">Popular</a>
          </li>
          <li style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <a style={{textDecoration:'none', color:path === '/battle' ? 'red' : '#000'}} href="/battle">Battle</a>
          </li>
        </ul>
      </div>
    )
  }

  // Popular
  function Popular() {
    return (
      <div style={{width:'80%', display:'flex', justifyContent:'space-around', flexWrap:'wrap', margin:'0 auto'}}>
        <Item />
      </div>
    )
  }

  // Battle
  function Battle() {
    const [isShow, setIsShow] = useState(false)
    // 表单
    const formik = useFormik({
      initialValues: {
        user1: '',
        user2: ''
      },
      onSubmit: v => {
        console.log(JSON.stringify(v))
        if (v.user1 && v.user2) {
          setIsShow(true)
        }
      },
      validate: v => {
        let error = {}
        if (!v.user1) error.message = '请输入用户名'
        return error
      }
    })

    // 对比
    function battleHandle() {
      // 根据用户名获取用户数据
      // 页面跳转
      window.location.href = '/result'
    }

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
              <input ref={userRef1} name="user1" type="text" defaultValue={formik.values.user1} onChange={formik.handleChange} />
              <button style={{marginLeft:'20px'}} disabled={formik.values.user1.trim() === '' ? 'disabled' : ''} type="submit">SUBMIT</button>
            </div>
            <div>
              <h3 style={{textAlign:'center'}}>Player Two</h3>
              <input ref={userRef2} name="user2" type="text" defaultValue={formik.values.user2} onChange={formik.handleChange} />
              <button style={{marginLeft:'20px'}} disabled={formik.values.user2.trim() === '' ? 'disabled' : ''} type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
        <button onClick={() => {battleHandle()}} style={{display:isShow ? 'block' : 'none', marginTop:'100px', width:'100px', height:'40px'}}>BATTLE</button>
      </div>
    )
  }

  // 对比结果
  function Result() {
    return (
      <div style={{width:'60%', margin:'0 auto', display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'40%', backgroundColor:'#eee'}}>
          <h2 style={{textAlign:'center'}}>Winner</h2>
          <img src="" alt="" />
          <h3 style={{textAlign:'center'}}>Score:</h3>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-location-arrow"></i>
            
          </dd>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-group"></i>
            
          </dd>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-user-plus"></i>
            
          </dd>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-code"></i>
            
          </dd>
        </div>
        <div style={{width:'40%', backgroundColor:'#eee'}}>
          <h2 style={{textAlign:'center'}}>Loser</h2>
          <img src="" alt="" />
          <h3 style={{textAlign:'center'}}>Score:</h3>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-location-arrow"></i>
            
          </dd>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-group"></i>
            
          </dd>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-user-plus"></i>
            
          </dd>
          <dd>
            <i style={{marginRight:'10px'}} className="fa fa-code"></i>
            
          </dd>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <h2 style={{textAlign:'center'}}>GitHub Popular Item</h2>
        <Nav />
        <InfinityScroll pageStart={0} loadMore={() => loadMoreData()} hasMore={hasMore}>
          <Route path="/" exact component={Popular} />
        </InfinityScroll>
        <Route path="/battle" component={Battle} />
        <Route path="/result" component={Result} />
      </BrowserRouter>
    </div>
  );
}

export default App;
