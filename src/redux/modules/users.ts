import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersModel, UsersModelProps, UserModelProps } from '~/models'

type UsersState = {
  entity: UsersModel
  isLoading: boolean
}
type SetUsersPayload = UsersModelProps
type addUserPayload = UserModelProps

export const initialState: UsersState = {
  isLoading: false,
  entity: new UsersModel(),
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    requestStart(state) {
      state.isLoading = true
    },
    requestSuccess(state) {
      state.isLoading = false
    },
    requestError(state) {
      state.isLoading = false
    },
    setUsers(state, action: PayloadAction<SetUsersPayload>) {
      state.entity = new UsersModel(action.payload)
    },
    addUser(state, action: PayloadAction<addUserPayload>) {
      state.entity.addUser(action.payload)
    },
  },
})

export const usersAction = usersSlice.actions

export default usersSlice.reducer
