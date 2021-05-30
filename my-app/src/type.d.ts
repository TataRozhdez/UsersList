interface IUser {
  id: string,
  firstName: string,
  lastName: string,
  dob: string
}

type UserState = {
  users: IUser[]
}

type UserAction = {
  type: string
  users: IUser[]
}

type objList = {
  [typeName: string]: IUser[]
} 

type DispatchType = (args: UserAction) => UserAction

type FilterUser = (users: IUser[]) => IUser[]

type SortAlphabet = (character: any, users: any) => void