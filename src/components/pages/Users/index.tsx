import React, { FC, useEffect } from 'react'
import { useServices } from '~/hooks'
import DefaultTemplate from '~/components/templates/DefaultTemplate'
import Users from './Users'

const UsersContainer: FC = () => {
  const { errorService, userService } = useServices()

  useEffect(() => {
    userService.fetchUsers().catch((e: Error) => {
      errorService.setError(e)
    })
  }, [])

  return (
    <DefaultTemplate>
      <Users />
    </DefaultTemplate>
  )
}

export default UsersContainer
