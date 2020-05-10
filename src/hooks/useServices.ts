import { useDispatch } from 'react-redux'
import { ErrorService, UserService } from '~/services'

export default () => {
  return {
    errorService: new ErrorService(useDispatch()),
    userService: new UserService(useDispatch()),
  }
}
