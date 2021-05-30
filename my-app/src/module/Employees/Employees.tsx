import * as React from 'react'
import { UserList } from './components/UserList/UserList'

const characterA = 65
const characterZ = 90

const alphabetUsers: SortAlphabet = (character, users, array) => {
  const listUsers: FilterUser = users.filter(
    (user: { lastName: string[] }) => user?.lastName[0].toUpperCase() === character,
  )

  const sortList: any = {}
  sortList[character] = listUsers

  return array.push(sortList)
}

const sort: Sort = (users, array) => {
  for (let i = characterA; i <= characterZ; i++) {
    alphabetUsers(String.fromCharCode(i), users, array)
  }
  return array
}

type Props = {
  users: IUser[]
  activeUsers: IUser[]
  setActive: (user: IUser, users: IUser[]) => UserAction
}

export const Employees: React.FC<Props> = ({ users, setActive, activeUsers }) => {
  const sortingUser: any[] = []

  sort(users, sortingUser)

  return (
    <div className="w-50">
      <h1>Employees</h1>
      <div className="users">
        {!!sortingUser.length &&
          sortingUser.map((userList: objList, index) => (
            <UserList key={index} userList={userList} activeUsers={activeUsers} setActive={setActive} />
          ))}
      </div>
    </div>
  )
}
