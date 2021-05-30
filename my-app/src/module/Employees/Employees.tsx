import * as React from 'react'
import { UserList } from '../UserList/UserList';

const characterA = 65
const characterZ = 90

const sortingUser: any[] = []

const alphabetUsers: SortAlphabet = (character, users) => {

  const listUsers: FilterUser = users.filter((user: { lastName: string[]; }): any => user?.lastName[0].toUpperCase() === character)
  
  const sortList: any = {}
  sortList[character] = listUsers

  return sortingUser.push(sortList)
}

type Props = {
  users: IUser[]
  // changeStatus?: (user: IUser) => void
}

export const Employees: React.FC<Props> = ({ users }) => {

  for (let i = characterA; i <= characterZ; i++) {
    alphabetUsers(String.fromCharCode(i), users);
  }  

  return (
  <div>
    <ul>
      <h1>Employees</h1>
        {
          sortingUser.length > 0
          && sortingUser.map((userList: objList, index: number) => <UserList key={index} userList={userList} />)
        }
    </ul>
  </div>      
  )
}

