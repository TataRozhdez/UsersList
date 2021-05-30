import * as actionTypes from './actionTypes'

const initialState: UserState = {
  users: [],
  activeUsers: [],
}

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }

    case actionTypes.ADD_USER: {
      return {
        ...state,
        activeUsers: action.users,
      }
    }
  }
  return state
}

export default reducer
