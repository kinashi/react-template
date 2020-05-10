import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  errorMessage?: string
  handleClose: () => void
}

const ErrorModal: FC<Props> = ({ errorMessage, handleClose }) => {
  if (!errorMessage) return null

  return (
    <Root>
      <Modal>
        <Message>{errorMessage}</Message>
        <Close onClick={handleClose}>close</Close>
      </Modal>
    </Root>
  )
}

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`

const Modal = styled.div`
  width: 80%;
  min-height: 40px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
`

const Message = styled.div`
  color: red;
`

const Close = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
`

export default ErrorModal
