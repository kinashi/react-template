import React, { FC } from 'react'
import ErrorModal from '~/components/organisms/ErrorModal'

const DefaultTemplate: FC = ({ children }) => (
  <>
    {children}
    <ErrorModal />
  </>
)

export default DefaultTemplate
