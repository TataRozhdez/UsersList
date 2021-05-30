import  * as React from 'react'

type Props = {
  userList: objList
}

export const UserList: React.FC<Props> = ({ userList }) => {
  const key = Object.keys(userList) 

  return (
    <ul>
      <h3>{key}</h3>
      {
        userList.key.map((user: IUser) => console.log(user))
      }
    </ul>
  )
}