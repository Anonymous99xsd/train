import React from 'react';
import './App.css';
// 过滤部分
import Filters from './components/Filters'
// 主体部分
import Shelf from './components/Shelf'

function App() {

  return (
    <div className="App">
      <Filters />
      <Shelf />
    </div>
  );
}

export default App
