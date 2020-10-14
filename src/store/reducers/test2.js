import {
  GET_TEST2_TOTAL,
  GET_TEST2_LIST,
  SET_TEST2_TOTAL
} from '../actionTypes'
const initialState = {
  test1: [
    {name: 'test2-1', value: 10},
    {name: 'test2-2', value: 20}
  ],
  total: 20
}

const getTotal = (state) => state.total || 0
const setTotal = (state, payload) => {
  state.total = payload.total
}

const test2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST2_LIST:
      return initialState.test1
    case GET_TEST2_TOTAL:
      return getTotal(state)
    case SET_TEST2_TOTAL:
      return setTotal(state)
    default: 
      return initialState;
  }
}

export default test2Reducer