import { RegisterFormInputs, RegisterReponse } from '../../models/common'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'
// props:payload and thunkApi for dispatch annother action
export interface CartState {
  cartValue: number
}

const initialState: CartState = {
  cartValue: 0,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCart: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartValue += 1
    },
    decrementCart: (state) => {
      state.cartValue -= 1
    },
  },
})
export const { incrementCart, decrementCart } = cartSlice.actions
export default cartSlice.reducer
