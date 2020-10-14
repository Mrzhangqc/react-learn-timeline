import * as types from '../actionTypes'

export const getT1List = () => (dispatch, getState) => {
  dispatch({
    type: types.GET_TEST1_LIST,
  })
}

export const setT1Total = ({payload}) => dispatch => {
  dispatch({
    type: types.SET_TEST1_TOTAL,
    payload
  })
}