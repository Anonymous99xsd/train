import React, { useState, useRef, useEffect, createContext, useContext, lazy, Suspense } from 'react'
import axios from 'axios'
import InfinityScroll from 'react-infinite-scroller'
import { HashRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom'
// import './App.css';
import './App.less'
// import Battle from './components/Battle/index'
// import Nav from './components/Nav/index'
const Battle = lazy(() => import('./components/Battle/index'))
const Nav = lazy(() => import('./components/Nav/index'))

function App() {
  // 图片数据
  const [data, setData] = useState([])
  // 加载页数
  const [count, setCount] = useState(1)
  // 判断是否已经获取数据
  const [isGot, setIsGot] = useState(false)
  // 数据获取api
  const [url] = useState([
    'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=',
    'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories&page=',
    'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories&page=',
    'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories&page=',
    'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories&page='
  ])
  // 当前加载数据种类
  const [kind, setKind] = useState(0)
  // 存储错误信息
  const [error, setError] = useState(null)
  const [isErr, setIsErr] = useState(false

  // loading
  const spinRef = useRef()
  const toggle = (value) => {
    if (value) {
      if (spinRef.current) spinRef.current.style.display = 'flex'
    }
    else spinRef.current.style.display = 'none'
  }

  // 加载用户数据
  function loadMoreData(index, bool) {
    toggle(true)
    axios.get(url[index] + (bool === true ? '1' : count))
    .then(response => {
      console.log(response.data);
      if (bool === true) {
        setData([...response.data.items])
        setKind(index)
        setCount(2)
      } else {
        setData([...data, ...response.data.items])
        setCount(count + 1)
      }
      toggle(false)
    })
    .catch(error => {
      console.log(error);
      toggle(false)
      setError(error)
      setIsErr(true)
    })
  }

  // 无限加载节流
  function throttle(kind) {
    let pre = Date.now()
    return function () {
      let now = Date.now()
      if (now - pre >= 1000) {
        loadMoreData(kind)
        pre = Date.now()
      }
    }
  }

  // 数据项目
  function Item () {
    const error = useContext(errContext)
    return (
      (data.length && data.map((item, index) => {
        return (
          <div className="items" key={item.id} style={{borderRadius:'8px',width:'22%', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#eee', margin:'10px auto'}}>
            <h2>#{index + 1}ewqdewdwq</h2>
            <img style={{display:'block', width:'160px', height:'160px'}} src={item.owner.avatar_url || require('./assets/default.webp').default} alt="" />
            <h4 style={{color:'red'}}>{item.name}</h4>
            <div style={{width:'100%', textAlign:'left', marginBottom:'20px'}}>
              <dd style={{marginLeft:'15%', maxWidth:'80%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                <i style={{marginRight:'10px', color:'rgb(255, 191, 116)'}} className="fas fa-address-card"></i>
                {item.name}
              </dd>
              <dd style={{marginLeft:'15%'}}>
                <i style={{marginRight:'10px', color:'rgb(255, 215, 0)'}} className="fas fa-star"></i>
                {item.stargazers_count} stars
              </dd>
              <dd style={{marginLeft:'15%'}}>
                <i style={{marginRight:'14px', marginLeft:'5px', color:'rgb(129, 195, 245)'}} className="fas fa-code-branch"></i>
                {item.forks} forks
              </dd>
              <dd style={{marginLeft:'15%'}}>
                <i style={{marginRight:'10px', color:'rgb(241, 138, 147)'}} className="fas fa-exclamation-triangle"></i>
                {item.open_issues} open issues
              </dd>
            </div>
          </div>
        )
      })) || (
      <div style={{display:isErr ? 'block' : 'none'}}>
        <h1 style={{color:'red'}}>ERROR: 数据获取失败</h1>
        <p style={{color:'red'}}>错误信息: {error?.toString()}</p>
      </div>
      )
    )
  }

  const errContext = createContext()
  // Popular
  function Popular() {
    // 加载数据
    useEffect(() => {
      if (!isGot) {
        setIsGot(true)
        let hash = null
        switch (window.location.hash.substr(1)) {
            case '/home/javascript':
              hash = 1
              break
            case '/home/ruby':
              hash = 2
              break
            case '/home/java':
              hash = 3
              break
            case '/home/css':
              hash = 4
              break
            default:
              hash = 0
        }
        loadMoreData(hash, true)
      }
    }, [])

    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <ul style={{display:'flex', listStyle:'none', width:'340px',justifyContent:'space-between', padding:'0'}}>
          <li className="tabHover" style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <NavLink onClick={() => loadMoreData(0, true)} style={{textDecoration:'none', color:kind === 0 ? 'red' : ''}} to='/home'>All</NavLink>
          </li>
          <li className="tabHover" style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <NavLink onClick={() => loadMoreData(1, true)} style={{textDecoration:'none', color:kind === 1 ? 'red' : ''}} to="/home/javascript">JavaScript</NavLink>
          </li>
          <li className="tabHover" style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <NavLink onClick={() => loadMoreData(2, true)} style={{textDecoration:'none', color:kind === 2 ? 'red' : ''}} to="/home/ruby">Ruby</NavLink>
          </li>
          <li className="tabHover" style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <NavLink onClick={() => loadMoreData(3, true)} style={{textDecoration:'none', color:kind === 3 ? 'red' : ''}} to="/home/java">Java</NavLink>
          </li>
          <li className="tabHover" style={{cursor:'pointer', fontSize:'18px', fontWeight:700}}>
            <NavLink onClick={() => loadMoreData(4, true)} style={{textDecoration:'none', color:kind === 4 ? 'red' : ''}} to="/home/css">CSS</NavLink>
          </li>
        </ul>
        <div style={{width:'100%'}}>
          <InfinityScroll style={{width:'80%', display:'flex', justifyContent:'space-around', flexWrap:'wrap', margin:'0 auto'}} pageStart={0} loadMore={throttle(kind)} hasMore={true}>
            <errContext.Provider value={error}>
              <Item />
            </errContext.Provider>
          </InfinityScroll>
        </div>
      </div>
    )
  }
  
  // 对比结果
  function Result() {
    const resetClick = () => {
      localStorage.removeItem('nameObj')
      localStorage.removeItem('isBtn')
      localStorage.removeItem('users')


    }

    return (
      <div style={{width:'60%', margin:'0 auto', display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <Compare />
        </div>
        <button onClick={() => resetClick()} style={{margin:'100px auto 0', width:'200px', fontSize:'22px', lineHeight:'40px', cursor:'pointer'}}>
          <Link style={{textDecoration:'none', color:'#333', padding:'10px 55px'}} to='/battle'>RESET</Link>
        </button>
      </div>
    )
  }

  // 对比项目
  function Compare() {
    // 对比用户数据
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

    // 获取用户数据
    const getUser = (name) => {
      toggle(true)
      axios.get('https://api.github.com/users/' + name)
        .then(response => {
          let tempArr = users
          tempArr.push(response.data)
          console.log([...tempArr]);
          setUsers([...tempArr])
          localStorage.setItem('users', JSON.stringify(tempArr))
          toggle(false)
        })
        .catch(error => {
          console.log(new Error('用户搜索失败', error))
          toggle(false)
        })
    }
    
    // 调用用户查询接口
    useEffect(() => {
      let nameObj = JSON.parse(localStorage.getItem('nameObj'))
      if (users.length === 0) {
        getUser(nameObj.user1)
        getUser(nameObj.user2)
      }
    }, [])

    return (
      (users.length === 2 && users?.map((item, index) => {
        const bool = users[0].public_gists + users[0].public_repos >= users[1].public_gists + users[1].public_repos
        const boolArr = [bool, !bool]
        return (
          <div style={{backgroundColor:'#eee', display:'flex', flexDirection:'column', alignItems:'center'}} key={item.id}>
            <h2>{boolArr[index] ? 'Winner' : 'loser'}1341234</h2>
            <img style={{display:'block', width:'200px', height:'200px', padding:'0 40px'}} src={item.avatar_url || require('./assets/default.webp').default} alt="" />
            <h3>Score: {item.public_repos + item.public_gists}</h3>
            <h2 style={{marginTop:'0', color:'#2091f9'}}>{item.name}</h2>
            <div style={{width:'100%', textAlign:'left', marginBottom:'20px'}}>
              <dd>
                324176
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
        <div style={{display:isErr ? 'block' : 'none'}}>
          <h1 style={{color:'red'}}>ERROR: 数据获取失败</h1>
          <p style={{color:'red'}}>错误信息: {error?.toString()}</p>
        </div>
      )
    )
  }

  return (
    <div className="App" style={{minHeight:'100vh'}}>
      <Router>
        <Suspense fallback>
          <h2 style={{textAlign:'center'}}>GitHub Popular Item</h2>
          <Nav />
          <Switch>
            <Route path="/home" component={Popular} />
            <Route path="/battle" exact component={Battle} />
            <Route path="/battle/result" component={Result} />
            <Redirect from='/' to="/home" exact></Redirect>
          </Switch>
        </Suspense>
      </Router>
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
    </div>
  );
}

export default App;
