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
      <h3>{key}</h3>
      <ul>
        {userList[key].length ? (
          userList[key].map((user: IUser) => (
            <li key={user.id}>
              <h5>
                {user.firstName} {user.lastName}
              </h5>
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
