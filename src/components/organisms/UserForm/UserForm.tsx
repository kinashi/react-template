import React, { FC, ChangeEvent } from 'react'
import styled from 'styled-components'

const FIRST_NAME_ID = 'user-first-name'
const LAST_NAME_ID = 'user-last-name'
const EMAIL_ID = 'user-email'

interface Props {
  handleSubmit: () => void
  handleChangeFirstName: (event: ChangeEvent<HTMLInputElement>) => void
  handleChangeLastName: (event: ChangeEvent<HTMLInputElement>) => void
  handleChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
}

const UserForm: FC<Props> = ({
  handleSubmit,
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeEmail,
}) => (
  <Root>
    <FormGroup>
      <Label htmlFor={FIRST_NAME_ID}>first name</Label>
      <TextField
        type={'text'}
        id={FIRST_NAME_ID}
        onChange={handleChangeFirstName}
      />
    </FormGroup>

    <FormGroup>
      <Label htmlFor={LAST_NAME_ID}>last name</Label>
      <TextField
        type={'text'}
        id={LAST_NAME_ID}
        onChange={handleChangeLastName}
      />
    </FormGroup>

    <FormGroup>
      <Label htmlFor={EMAIL_ID}>first name</Label>
      <TextField type={'text'} id={EMAIL_ID} onChange={handleChangeEmail} />
    </FormGroup>

    <Submit onClick={handleSubmit}>submit</Submit>
  </Root>
)

const Root = styled.div`
  margin-top: 40px;
`

const FormGroup = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`

const Label = styled.label`
  margin-right: 10px;
`

const TextField = styled.input`
  border: 1px solid #ccc;
`

const Submit = styled.button`
  margin-top: 20px;
  border: 1px solid #ccc;
`

export default UserForm
