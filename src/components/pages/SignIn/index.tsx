import React, { FC } from 'react'
import SignIn from './SignIn'
import DefaultTemplate from '~/components/templates/DefaultTemplate'

const SignInContainer: FC = () => {
  return (
    <DefaultTemplate>
      <SignIn />
    </DefaultTemplate>
  )
}

export default SignInContainer
