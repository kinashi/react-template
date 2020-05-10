import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '~/redux/store'
import ErrorModal from './ErrorModal'
import { useServices } from '~/hooks'

const UsersContainer: FC = () => {
  const error = useSelector((state: AppState) => state.error)
  const { errorService } = useServices()

  return (
    <ErrorModal
      errorMessage={error.message}
      handleClose={() => {
        errorService.clearError()
      }}
    />
  )
}

export default UsersContainer
