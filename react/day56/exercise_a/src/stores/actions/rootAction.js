import * as rootActionType from './rootActionType'

//action creaters: functions that generate actions
//actions are objects that have 'type' as a key

export const ADD_LINK_ACTION = () => {
  return {
    type: rootActionType.ADD_LINK,
    link: {
      title: 'Xccelerate',
      url: 'https://xccelerate.co/'
    }
  }
}

export const CLEAR_LINK_ACTION = () => {
  return {
    type: rootActionType.CLEAR_LINK
  }
}

export const REMOVE_LINK_ACTION = (id) => {
  return {
    type: rootActionType.REMOVE_LINK,
    id:id
    
  }
}
