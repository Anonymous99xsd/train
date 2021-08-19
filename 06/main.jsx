function App () {
    // 图片数据
    const [data, setData] = React.useState([])
    // 加载页数
    const [count, setCount] = React.useState(1)
    // 判断是否已经获取数据
    const [isGot, setIsGot] = React.useState(false)
    // 数据获取api
    const [url] = React.useState([
        'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=',
        'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories&page=',
        'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories&page=',
        'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories&page=',
        'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories&page='
    ])
    // 当前加载数据种类
    const [kind, setKind] = React.useState(0)

    // 加载用户数据
    function loadMoreData (index, bool) {
        setKind(index)
        fetch(url[index] + (bool === true ? '1' : count))
            .then(data => data.json())
            .then(response => {
                console.log(response);
                if (bool === true) {
                    setData([...response.items])
                    setCount(2)
                } else {
                    setData([...data, ...response.items])
                    setCount(count + 1)
                }
            })
            .catch(error => {
                console.log(error);
                setData([])
            })
    }

    // 数据项目
    function Item () {
        return (
            (data.length || <h1>ERROR</h1>) && data.map((item, index) => {
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
            })
        )
    }

    // Popular
    function Popular () {
        // 加载数据
        React.useEffect(() => {
            if (!isGot) {
                setIsGot(true)
                let hash = null
                switch (window.location.hash.split('?')[1]) {
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
                        <span onClick={() => loadMoreData(0, true)} style={{ textDecoration: 'none', color: kind === 0 ? 'red' : '' }}>All</span>
                    </li>
                    <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
                        <span onClick={() => loadMoreData(1, true)} style={{ textDecoration: 'none', color: kind === 1 ? 'red' : '' }}>JavaScript</span>
                    </li>
                    <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
                        <span onClick={() => loadMoreData(2, true)} style={{ textDecoration: 'none', color: kind === 2 ? 'red' : '' }}>Ruby</span>
                    </li>
                    <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
                        <span onClick={() => loadMoreData(3, true)} style={{ textDecoration: 'none', color: kind === 3 ? 'red' : '' }}>Java</span>
                    </li>
                    <li className="tabHover" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}>
                        <span onClick={() => loadMoreData(4, true)} style={{ textDecoration: 'none', color: kind === 4 ? 'red' : '' }}>CSS</span>
                    </li>
                </ul>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                    <Item />
                </div>
                <button onClick={() => loadMoreData(count)} style={{ height: '40px', width: '200px', cursor: 'pointer' }}>加载更多</button>
            </div>
        )
    }

    return (
        <div className="App" style={{ minHeight: '100vh' }}>
            <h2 style={{ textAlign: 'center' }}>GitHub Popular Item</h2>
            <Popular />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));