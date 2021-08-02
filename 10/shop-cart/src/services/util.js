export function getList() {
    return fetch('http://localhost:8001/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch(error => {
            throw new Error(error)
        })
}