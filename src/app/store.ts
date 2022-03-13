import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../pages/Auth/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>

export default store

export type AppDispatch = typeof store.dispatch
