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
        // shopCart: [],
        // isEject: false,
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
    },
}