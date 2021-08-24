import React, { useState, useRef, useEffect, createContext, useContext, lazy, Suspense } from 'react'
import axios from 'axios'
import InfinityScroll from 'react-infinite-scroller'
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
// import './App.css';
import './App.less'
// import Battle from './components/Battle/index'
// import Nav from './components/Nav/index'
const Battle = lazy(() => import('./components/Battle/index'))
const Nav = lazy(() => import('./components/Nav/index'))
const Result = lazy(() => import('./components/Result/index'))
import Spin from './components/Spin/index'
import toggle from './components/toggle'

function App () {
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
  const [isErr, setIsErr] = useState(false)

  // loading
  const spinRef = useRef()

  // 加载用户数据
  function loadMoreData (index, bool) {
    toggle(spinRef, true)
    setKind(index)
    axios.get(url[index] + (bool === true ? '1' : count))
      .then(response => {
        console.log(response.data);
        if (bool === true) {
          setData([...response.data.items])
          setCount(2)
        } else {
          setData([...data, ...response.data.items])
          setCount(count + 1)
        }
        toggle(spinRef, false)
      })
      .catch(error => {
        console.log(error.message);
        setData([])
        setError(error)
        setIsErr(true)
        toggle(spinRef, false)
      })
  }

  // 无限加载节流
  function throttle (kind) {
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
          <div className="items" key={item.id} style={{ borderRadius: '8px', width: '22%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#eee', margin: '10px auto' }}>
            <h2>#{index + 1}</h2>
            <img style={{ display: 'block', width: '160px', height: '160px' }} src={item.owner.avatar_url || require('./assets/default.webp').default} alt="" />
            <h4 style={{ color: 'red' }}>{item.name}</h4>
            <div style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
              <dd style={{ marginLeft: '15%', maxWidth: '80%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <i style={{ marginRight: '10px', color: 'rgb(255, 191, 116)' }} className="fas fa-address-card"></i>
                {item.name}
              </dd>
              <dd style={{ marginLeft: '15%' }}>
                <i style={{ marginRight: '10px', color: 'rgb(255, 215, 0)' }} className="fas fa-star"></i>
                {item.stargazers_count} stars
              </dd>
              <dd style={{ marginLeft: '15%' }}>
                <i style={{ marginRight: '14px', marginLeft: '5px', color: 'rgb(129, 195, 245)' }} className="fas fa-code-branch"></i>
                {item.forks} forks
              </dd>
              <dd style={{ marginLeft: '15%' }}>
                <i style={{ marginRight: '10px', color: 'rgb(241, 138, 147)' }} className="fas fa-exclamation-triangle"></i>
                {item.open_issues} open issues
              </dd>
            </div>
          </div>
        )
      })) || (
        <div style={{ display: isErr ? 'block' : 'none' }}>
          <h1 style={{ color: 'red' }}>ERROR: 数据获取失败</h1>
          <p style={{ color: 'red' }}>错误信息: {error?.message}</p>
        </div>
      )
    )
  }

  const errContext = createContext()
  // Popular
  function Popular () {
    // 加载数据
    useEffect(() => {
      if (!isGot) {
        setIsGot(true)
        let hash = null
        switch (window.location.hash.split('=')[1]) {
          case 'javascript':
            hash = 1
            break
          case 'ruby':
            hash = 2
            break
          case 'java':
            hash = 3
            break
          case 'css':
            hash = 4
            break
          default:
            hash = 0
        }
        loadMoreData(hash, true)
      }
    }, [])

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul style={{ display: 'flex', listStyle: 'none', width: '340px', justifyContent: 'space-between', padding: '0' }}>
          <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
            <NavLink onClick={() => loadMoreData(0, true)} style={{ textDecoration: 'none', color: kind === 0 ? 'red' : '' }} to='/home'>All</NavLink>
          </li>
          <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
            <NavLink onClick={() => loadMoreData(1, true)} style={{ textDecoration: 'none', color: kind === 1 ? 'red' : '' }} to="/home?tab=javascript">JavaScript</NavLink>
          </li>
          <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
            <NavLink onClick={() => loadMoreData(2, true)} style={{ textDecoration: 'none', color: kind === 2 ? 'red' : '' }} to="/home?tab=ruby">Ruby</NavLink>
          </li>
          <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
            <NavLink onClick={() => loadMoreData(3, true)} style={{ textDecoration: 'none', color: kind === 3 ? 'red' : '' }} to="/home?tab=java">Java</NavLink>
          </li>
          <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
            <NavLink onClick={() => loadMoreData(4, true)} style={{ textDecoration: 'none', color: kind === 4 ? 'red' : '' }} to="/home?tab=css">CSS</NavLink>
          </li>
        </ul>
        <div style={{ width: '100%' }}>
          <InfinityScroll style={{ width: '80%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '0 auto' }} pageStart={0} loadMore={throttle(kind)} hasMore={true}>
            <errContext.Provider value={error}>
              <Item />
            </errContext.Provider>
          </InfinityScroll>
        </div>
      </div>
    )
  }

  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <Router>
        <Suspense fallback>
          <h2 style={{ textAlign: 'center' }}>GitHub Popular Item</h2>
          <Nav />
          <Switch>
            <Route path="/home" component={Popular} />
            <Route path="/battle" exact component={Battle} />
            <Route path="/battle/result" component={Result} />
            <Redirect from='/' to="/home" exact></Redirect>
          </Switch>
        </Suspense>
      </Router>
      <Spin spinRef={spinRef} />
    </div>
  );
}

export default App;
