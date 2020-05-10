import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import error from './modules/error'
import users from './modules/users'

const rootReducer = combineReducers({
  error,
  users,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger as Middleware,
  ],
})

export type AppState = ReturnType<typeof rootReducer>

export default store
