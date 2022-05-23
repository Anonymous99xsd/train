import { getList, sortCart } from './services/util'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    namespace: 'products',
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
        error: null,
        isSpin: true
    },
    effects: {
        // 获取数据
        * getListHttp(_, { call, put }) {
            const result = yield call(getList)
            yield put({
                type: 'setData',
                payload: {
                    data: result
                }
            })
        },
        // 排序
        * sortCarts({ payload: obj }, { call, put, select }) {
            const data = yield select(state => state.products.data)
            const result = yield call(sortCart, obj.key, data)
            yield put({
                type: 'sort',
                payload: {
                    data: result
                }
            })
        }
    },
    reducers: {
        setData(state, { payload: res }) {
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
        setSort(state, {payload: data}) {
            console.log('sort', data);
            return {
                ...state,
                ...data
            }
        },
    },
}