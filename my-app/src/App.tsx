import * as React from 'react'
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Employees } from './module/Employees/Employees'
import { getDataAPI } from './axios/axiosConfig'
import { getUsers } from './store/actionCreators'

const App: React.FC = () => {
  const users: IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch()

  const handleGetUsers = (users: IUser[]) => dispatch(getUsers(users))

  React.useEffect(() => {
    !users.length && getDataAPI(handleGetUsers)
  }, [])  

  return (
    <React.Fragment>
      {
        users.length && <Employees users={users} />
      }
      <div>
        <h1>Employees birthday</h1>
      </div>
    </React.Fragment>
  )
}

export default App
