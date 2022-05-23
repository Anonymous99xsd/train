import dva from "dva";

const app = dva({
    onStateChange: ({cart: { shopCart }}) => {
        console.log(shopCart);
    }
})

app.model(require('./Model/products').default)
app.model(require('./Model/cart').default)

app.router(require('./router').default)

app.start('#root')