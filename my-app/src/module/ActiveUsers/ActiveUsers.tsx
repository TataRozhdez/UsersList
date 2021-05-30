import * as React from 'react'
import { ActiveList } from './components/ActiveList'

const monthSort: SortMonth = (users) => {
  let sorting: any[] = []

  if (users.length) {
    users.map((i) => {
      const date = new Date(i.dob)
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)

      if (!sorting.length) {
        return sorting.push({
          [month]: [i],
        })
      } else if (sorting.find((s) => Object.keys(s).toString() === month)) {
        const existMonth = sorting.find((s) => Object.keys(s).toString() === month)

        sorting = sorting.filter((f) => Object.keys(f).toString() !== month)

        const newMonth = { [month]: [i] }

        existMonth[month].forEach((e: any) => newMonth[month].push(e))

        return (sorting = [...sorting, newMonth])
      }

      return sorting.push({
        [month]: [i],
      })
    })
  }

  return sorting
}

type Props = {
  activeUsers: IUser[]
}

export const ActiveUsers: React.FC<Props> = ({ activeUsers }) => {
  const newArr = monthSort(activeUsers)

  return (
    <div className="w-50">
      <h1>Employees birthday</h1>
      {activeUsers.length ? <ActiveList userList={newArr} /> : <h5>Employees List is empty</h5>}
    </div>
  )
}
