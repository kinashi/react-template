import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  users: Array<{
    id: string
    name: string
    email?: string
  }>
}

const UserList: FC<Props> = ({ users }) => (
  <Root>
    {users.map((user) => (
      <ListItem key={user.id}>
        name: {user.name}
        <br />
        email: {user.email}
      </ListItem>
    ))}
  </Root>
)

const Root = styled.ul``
const ListItem = styled.li``

export default UserList
