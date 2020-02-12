import * as rootActionType from '../actions/rootActionType'

const initalState = []

const addLinkReducer = (state, action) => {
  // generate a new state based on state (current state) and action
  return {
      ...state,
      linksReducer: state.linksReducer.concat([action.link])
  }
}

const clearLinkReducer = (state, action) => {
  // generate a new state based on state (current state) and action
  return {}
}

const removeLinkReducer = (state, action) => {
  // generate a new state based on state (current state) and action
  return {}
}

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case rootActionType.ADD_LINK:
      return addLinkReducer(state, action)
      break
    case rootActionType.CLEAR_LINK:
      return clearLinkReducer(state, action)
      break
    case rootActionType.REMOVE_LINK:
      return removeLinkReducer(state, action)
    default:
      return state
  }
}

export default rootReducer
