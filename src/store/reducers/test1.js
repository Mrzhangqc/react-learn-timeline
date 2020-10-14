import {
  SET_TEST1_TOTAL,
  GET_TEST1_LIST
} from '../actionTypes'

const initialState = {
  test1: [
  {name: 'test1-1', value: 10},
  {name: 'test1-2', value: 20}
  ],
  total: 2
}

function createReducer (initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}

const test1Reducer = createReducer(initialState, {
  [GET_TEST1_LIST](state, action) {
    return state.test1
  },
  [SET_TEST1_TOTAL](state, action) {
    const {payload} = action
    return {
      ...state,
      total: payload.total
    }
  },
})

export default test1Reducer