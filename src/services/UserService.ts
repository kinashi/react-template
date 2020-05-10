import { Dispatch } from 'redux'
import { usersRepository, CreateUserRequest } from '~/repositories'
import { usersAction } from '~/redux/actions'

export default class UserService {
  readonly dispatch: Dispatch

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch
  }

  public async fetchUsers() {
    this.dispatch(usersAction.requestStart)
    const users = await usersRepository.getUsers().catch((e: Error) => {
      usersAction.requestError()
      throw e
    })
    this.dispatch(usersAction.setUsers({ users }))
    this.dispatch(usersAction.requestSuccess())
  }

  public async createUser(params: CreateUserRequest) {
    this.dispatch(usersAction.requestStart)
    const user = await usersRepository.createUser(params).catch((e: Error) => {
      usersAction.requestError()
      throw e
    })
    this.dispatch(usersAction.addUser(user))
    this.dispatch(usersAction.requestSuccess())
  }
}
