import { immerable } from 'immer'

export type UserModelProps = {
  id: string
  firstName: string
  lastName: string
  email: string
}

export class UserModel {
  readonly [immerable]: boolean
  readonly id: string
  firstName: string
  lastName: string
  email?: string

  constructor({ id, firstName, lastName, email }: UserModelProps) {
    this[immerable] = true
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
  }
}
