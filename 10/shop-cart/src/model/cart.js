/* eslint-disable import/no-anonymous-default-export */
export default {
    namespace: 'cart',
    state: {
        shopCart: [],
        isEject: false,
    },
    effects: {
        // 从本地存储中获取购物车数据
        *getShopCart(_, { call, put }) {
            let shopCart = yield JSON.parse(localStorage.getItem('shopCart'))
            yield put({
                type: 'setShopCart',
                payload: shopCart
            })
        }
    },
    reducers: {
        // 添加商品至购物车
        addToCart(state, {payload: good}) {
            // console.log('addToCart', good);
            let tempCart = state.shopCart
            let sign = false
            for (let v of tempCart) {
                if (v.id === good.id) {
                    v.quantity++
                    sign = true
                    break
                }
            }
            if (!sign) {
                good.quantity = 1
                tempCart.push(good)
            }
            state.shopCart = [...tempCart]
            if (!state.isEject) state.isEject = true
            return {
                ...state,
            }
        },
        // 打开购物车
        openShop(state) {
            if (!state.isEject) state.isEject = true
            return { ...state }
        },
        // 关闭购物车
        closeShop(state) {
            if (state.isEject) state.isEject = false
            return { ...state }
        },
        // 删除购物车中的商品
        deleteCart(state, {payload: id}) {
            // console.log('deleteCart', id);
            let tempCart = state.shopCart
            for (let i in tempCart) {
                if (tempCart[i].id === id) {
                    tempCart.splice(i, 1)
                    break
                }
            }
            if (tempCart.length === 0) state.isEject = false
            state.shopCart = tempCart.slice()
            return {
                ...state
            }
        },
        // 增加一个商品
        addOneGood(state, {payload: id}) {
            let tempCart = state.shopCart
            for (let v of tempCart) {
                if (v.id === id) {
                    v.quantity++
                    break
                }
            }
            state.shopCart = tempCart.slice()
            return {
                ...state
            }
        },
        // 减少一个商品
        subtrackGood(state, {payload: id}) {
            let tempCart = state.shopCart
            for (let v of tempCart) {
                if (v.id === id) {
                    v.quantity--
                    break
                }
            }
            state.shopCart = tempCart.slice()
            return {
                ...state
            }
        },
        // 清空购物车
        clearShopCart(state) {
            state.shopCart = []
            state.isEject = false
            return {
                ...state
            }
        },
        // 获取本地存储
        setShopCart(state, { payload: shopCart}) {
            return { ...state, shopCart }
        }
    }
}