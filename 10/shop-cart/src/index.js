import dva from "dva";

const app = dva()

app.model(require('./services/products').default)
app.model(require('./services/cart').default)

app.router(require('./router').default)

app.start('#root')