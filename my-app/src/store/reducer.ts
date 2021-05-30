import * as actionTypes from "./actionTypes"

const initialState: UserState = {
  users: [],
}

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
      
    // case actionTypes.REMOVE_USER: {
    //   const updatedUsers: IUser[] = state.users.filter(
    //     user => user.id !== action.user.id
    //   )
    //   return {
    //     ...state,
    //     users: updatedUsers,
    //   }
    // }
      
  }
  return state
}

export default reducer