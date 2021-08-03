import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'dva'
// 过滤部分
import Filters from './components/Filters'
// 主体部分
import Shelf from './components/Shelf'

function App(props) {
  // 发送请求，获取数据
  useEffect(() => {
    const { dispatch } = props
    dispatch({
      type: 'data/getListHttp'
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Filters />
      <Shelf />
    </div>
  );
}

export default connect()(App)
