import * as React from 'react'
import { Dispatch } from 'redux'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { Employees } from './module/Employees/Employees'
import { getDataAPI } from './axios/axiosConfig'
import { getUsers, addUser, getActiveUsers } from './store/actionCreators'
import { ActiveUsers } from './module/ActiveUsers/ActiveUsers'

const App: React.FC = () => {
  const users: IUser[] = useSelector((state: UserState) => state.users, shallowEqual)
  const activeUsers: IUser[] = useSelector((state: UserState) => state.activeUsers, shallowEqual)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch()

  const handleGetUsers = (users: IUser[]) => dispatch(getUsers(users))
  const handleSetActive = (user: IUser, activeUsers: IUser[]) => dispatch(addUser(user, activeUsers))
  const handleGetAcitve = () => dispatch(getActiveUsers())

  React.useEffect(() => {
    handleGetAcitve()

    if (!users.length) getDataAPI(handleGetUsers)
  }, [])

  return (
    <div className="app">
      {!!users.length && <Employees users={users} setActive={handleSetActive} activeUsers={activeUsers} />}
      <ActiveUsers activeUsers={activeUsers} />
    </div>
  )
}

export default App
