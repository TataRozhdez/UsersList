import * as actionTypes from './actionTypes'

export function getUsers(users: IUser[]) {
  const action: UserAction = {
    type: actionTypes.GET_USERS,
    users,
  }

  return action
}


// export function removeUser(user: IUser) {
//   const action: UserAction = {
//     type: actionTypes.REMOVE_USER,
//     user,
//   }
//   return simulateHttpRequest(action)
// }

// export function simulateHttpRequest(action: UserAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }