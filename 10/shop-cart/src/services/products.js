import { getList } from './util'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    namespace: 'data',
    state: {
        sizes: {
            'XS': true,
            'S': true,
            'M': true,
            'ML': true,
            'L': true,
            'XL': true,
            'XXL': true
        },
        data: null,
        shopCart: [],
        isEject: false,
        error: null,
        isSpin: true
    },
    effects: {
        // 获取数据
        * getListHttp(_, { call, put }) {
            const result = yield call(getList)
            yield put({
                type: 'getData',
                payload: {
                    data: result
                }
            })
        },
    },
    reducers: {
        getData(state, { payload: res }) {
            // console.log('getData', res);
            state.isSpin = false
            if (res.data.toString().includes('Error')) {
                return {
                    ...state,
                    error: res.data
                }
            } else {
                return {
                    ...state,
                    data: res.data.products
                }
            }
        },
        get(state) {
            // console.log('get', state);
            return {
                ...state
            }
        },
        // 过滤尺码
        filterSize(state, {payload: sizes}) {
            // console.log('filterSize', sizes)
            return {
                ...state,
                ...sizes
            }
        },
        // 排序
        sort(state, {payload: data}) {
            // console.log('sort', data);
            return {
                ...state,
                ...data
            }
        },
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
        getShopCart(state) {
            state.shopCart = JSON.parse(localStorage.getItem('shopCart'))
            return { ...state }
        }
    },
}