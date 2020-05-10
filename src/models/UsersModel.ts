import { immerable } from 'immer'
import { UserModel, UserModelProps } from './UserModel'
export { UserModelProps }

export type UsersModelProps = {
  users: Array<UserModelProps>
}

export class UsersModel {
  readonly [immerable]: boolean
  public _list: Map<string, UserModel>

  constructor(props?: UsersModelProps) {
    props
      ? (this._list = new Map(
          props.users.map((user) => [user.id, new UserModel(user)])
        ))
      : (this._list = new Map())

    this[immerable] = true
  }

  public get list() {
    return Array.from(this._list).map(([_, user]) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }))
  }

  public addUser(user: UserModelProps) {
    this._list.set(user.id, new UserModel(user))
  }
}
