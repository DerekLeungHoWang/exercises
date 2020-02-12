import * as authActionTypes from './authActionTypes'

//action creaters: functions that generate actions
//actions are objects that have 'type' as a key
export const loginAction = userId => {
  return {
    type: authActionTypes.LOGIN,
    userId: userId
  }
}

export const logoutAction = () => {
  return {
    type: authActionTypes.LOGOUT
  }
}
