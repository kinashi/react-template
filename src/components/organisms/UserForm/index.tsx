import React, { FC, useState, useCallback, ChangeEvent } from 'react'
import { useServices } from '~/hooks'
import UserForm from './UserForm'

interface UserFormValues {
  firstName: string
  lastName: string
  email: string
}

const UserFormContainer: FC = () => {
  const { userService } = useServices()
  const [userFormValues, setUserFormValues] = useState<UserFormValues>({
    firstName: '',
    lastName: '',
    email: '',
  })
  const handleChangeFirstName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUserFormValues({
        ...userFormValues,
        firstName: event.target.value,
      })
    },
    [userFormValues]
  )
  const handleChangeLastName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUserFormValues({
        ...userFormValues,
        lastName: event.target.value,
      })
    },
    [userFormValues]
  )
  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUserFormValues({
        ...userFormValues,
        email: event.target.value,
      })
    },
    [userFormValues]
  )
  const handleSubmit = useCallback(() => {
    userService.createUser({ userForm: userFormValues })
  }, [userFormValues])

  return (
    <UserForm
      handleSubmit={handleSubmit}
      handleChangeFirstName={handleChangeFirstName}
      handleChangeLastName={handleChangeLastName}
      handleChangeEmail={handleChangeEmail}
    />
  )
}

export default UserFormContainer
