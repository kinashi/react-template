import React, { FC } from 'react'
import Heading from '~/components/atoms/Heading'
import UserList from '~/components/organisms/UserList'
import UserForm from '~/components/organisms/UserForm'

const Users: FC = () => (
  <>
    <Heading>Users</Heading>
    <UserList />
    <UserForm />
  </>
)

export default Users
