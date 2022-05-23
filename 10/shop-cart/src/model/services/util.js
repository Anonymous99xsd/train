// 获取数据
export function getList() {
    return fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch(error => {
            return new Error(error)
        })
}

// 排序
export function sortCart(key, data) {
    if (key === '0') {
        data.sort((a, b) => a.id - b.id)
    } else if (key === '1') {
        data.sort((a, b) => a.price - b.price)
    } else if (key === '2') {
        data.sort((a, b) => b.price - a.price)
    }
    return data
}