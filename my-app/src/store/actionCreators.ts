import * as actionTypes from './actionTypes'

export function getUsers(users: IUser[]): UserAction {
  const action: UserAction = {
    type: actionTypes.GET_USERS,
    users,
  }

  return action
}

export function getActiveUsers(): UserAction {
  const activeUsers: any[] = []

  const local = localStorage.getItem('yalantis-active')

  if (local) {
    activeUsers.push(...JSON.parse(local))
  }

  const action: UserAction = {
    type: actionTypes.ADD_USER,
    users: activeUsers,
  }
  return action
}

export function addUser(user: IUser, activeUsers: IUser[]): UserAction {
  const updatedUsers = []

  if (activeUsers.find((u) => u.id === user.id)) {
    const newArr = activeUsers.filter((u) => u.id !== user.id)
    updatedUsers.push(...newArr)
  } else {
    updatedUsers.push(...activeUsers, user)
  }

  localStorage.setItem('yalantis-active', JSON.stringify(updatedUsers))

  const action: UserAction = {
    type: actionTypes.ADD_USER,
    users: updatedUsers,
  }
  return action
}
