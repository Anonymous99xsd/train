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