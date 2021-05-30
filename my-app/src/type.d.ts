interface IUser {
  id: string
  firstName: string
  lastName: string
  dob: string
}

type UserState = {
  users: IUser[]
  activeUsers: IUser[]
}

type UserAction = {
  type: string
  users: IUser[]
}

type objList = {
  [typeName: string]: IUser[]
}

type DispatchType = (args: UserAction) => UserAction

type FilterUser = (users: IUser[]) => void

type SortAlphabet = (character: string, users: any, array: any) => void
type Sort = (users: any, array: any) => void
