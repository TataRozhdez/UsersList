import * as React from 'react'
import moment from 'moment'

type Props = {
  userList: any
}

export const ActiveList: React.FC<Props> = ({ userList }) => {
  return (
    <div>
      {userList.map((item: List[], index: any) => (
        <ul key={index}>
          <h3>{Object.keys(item)[0]}</h3>
          {Object.values(item)[0].map((i: any, index: any) => (
            <li key={index}>
              {i.lastName} {i.lastName} {moment(i.dob).format('DD MMMM, YYYY')} year
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
