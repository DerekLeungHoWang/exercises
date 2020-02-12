import * as actionTypes from '../actions/authActionTypes'

const initialState = {
  isLoggedIn: false,
  userId: null
}

const loginReducer = (state, action) => {
  // generate a new state based on state (current state) and action
  return {
    ...state,
    isLoggedIn: true,
    userId: action.userId
  }
}
const logoutReducer = state => {
  // generate a new state based on state (current state) and action
  return {
    ...state,
    isLoggedIn: false,
    userId: null
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return loginReducer(state, action)
      break
    case actionTypes.LOGOUT:
      return logoutReducer(state)
      break
    default:
      return state
  }
}

export default authReducer
