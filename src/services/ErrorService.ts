import { Dispatch } from 'redux'
import { errorAction } from '~/redux/actions'

type SetErrorProps = {
  message: string
}

export default class UserService {
  readonly dispatch: Dispatch

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch
  }

  public setError({ message }: Error) {
    this.dispatch(errorAction.set({ message }))
  }

  public clearError() {
    this.dispatch(errorAction.clear())
  }
}
