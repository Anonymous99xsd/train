import {
    getList
} from './util'

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
        data: null
    },
    effects: {
        // 获取数据
        * getListHttp(_, { call, put }) {
            const result = yield call(getList)
            yield put({
                type: 'getData',
                payload: {
                    data: result.products
                }
            })
        },
    },
    reducers: {
        getData(state, {
            payload: data
        }) {
            console.log('getData', state);
            return {
                ...state,
                ...data
            }
        },
        get(state) {
            console.log('get', state);
            return {
                ...state
            }
        },
        // 过滤尺码
        filterSize(state, {payload: sizes}) {
            console.log('filterSize', sizes)
            return {
                ...state,
                ...sizes
            }
        },
        // 排序
        sort(state, {payload: data}) {
            console.log('sort', data);
            return {
                ...state,
                ...data
            }
        },
    },
}