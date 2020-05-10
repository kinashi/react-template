import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '~/redux/store'
import UserList from './UserList'

const UserListContainer: FC = () => {
  const users = useSelector((state: AppState) => state.users.entity.list)

  return (
    <UserList
      users={users.map(({ id, firstName, lastName, email }) => ({
        id,
        name: `${firstName} ${lastName}`,
        email,
      }))}
    />
  )
}

export default UserListContainer
