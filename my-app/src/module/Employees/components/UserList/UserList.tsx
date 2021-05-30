import * as React from 'react'

type Props = {
  userList: objList
  activeUsers: IUser[]
  setActive: (user: IUser, users: IUser[]) => UserAction
}

export const UserList: React.FC<Props> = ({ userList, setActive, activeUsers }) => {
  const key = Object.keys(userList)[0]

  return (
    <div className="user-list">
      <h2>{key}</h2>
      <ul>
        {userList[key].length ? (
          userList[key].map((user: IUser) => (
            <li key={user.id}>
              <h3 className={activeUsers.find((item) => item.id === user.id) ? 'text-blue' : 'text-black'}>
                {user.firstName} {user.lastName}
              </h3>
              <p>
                <input
                  type="radio"
                  checked={activeUsers.find((item) => item.id === user.id) ? false : true}
                  onChange={() => setActive(user, activeUsers)}
                  // name={`active-${user.id}`}
                  id={user.id}
                />
                <label htmlFor={user.id}>Not Active</label>
              </p>
              <p>
                <input
                  type="radio"
                  checked={activeUsers.find((item) => item.id === user.id) ? true : false}
                  onChange={() => setActive(user, activeUsers)}
                  // name={`active-${user.id}`}
                  id={user.id}
                />
                <label htmlFor={user.id}>Active</label>
              </p>
            </li>
          ))
        ) : (
          <li>-----</li>
        )}
      </ul>
    </div>
  )
}
