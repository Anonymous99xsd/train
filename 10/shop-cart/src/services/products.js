import { getList } from './util'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    namespace: 'data',
    state: {
        data: null
    },
    reducers: {
        getData(state, {payload: data}) {
            return {
                ...state,
                data: data.data  //第一个data是state的，第二个data是payload的
            }
        }
    },
    effects: {
        *getListHttp(_, {call, put}) {
            const result = yield call(getList)
            yield put({
                type: 'getData',
                payload: {
                    data: result.products
                }
            })
        }
    },
}