import * as React from 'react'

type Props = {
  activeUsers: IUser[]
}

export const ActiveUsers: React.FC<Props> = ({ activeUsers }) => {
  console.log(activeUsers)

  return (
    <div className="w-50">
      <h1>Employees birthday</h1>
      <div className="active-users">
        <h3>sdfg</h3>
      </div>
    </div>
  )
}
