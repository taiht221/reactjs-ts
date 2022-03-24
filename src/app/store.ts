import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../pages/Auth/userSlice'
import cartReducer from '../pages/Cart/cartSlice'
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
