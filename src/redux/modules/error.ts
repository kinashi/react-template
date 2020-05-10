import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ErrorState = {
  message?: string
}

type SetErrorPayload = {
  message: string
}

export const initialState: ErrorState = {
  message: undefined,
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    set(state, action: PayloadAction<SetErrorPayload>) {
      state.message = action.payload.message
    },
    clear(state) {
      state.message = undefined
    },
  },
})

export const errorAction = errorSlice.actions

export default errorSlice.reducer
