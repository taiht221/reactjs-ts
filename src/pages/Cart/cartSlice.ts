import { RegisterFormInputs, RegisterReponse } from '../../models/common'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'
// props:payload and thunkApi for dispatch annother action
export interface CartState {
  showMiniCart: Boolean
  cartItems: any
}

const initialState: CartState = {
  showMiniCart: false,
  cartItems: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true
    },
    hideMiniCart(state) {
      state.showMiniCart = false
    },
    addToCart(state, action) {
      const newItem = action.payload
      const index = state.cartItems.findIndex((x: any) => x.id === newItem.id)
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity
      } else {
        state.cartItems.push(newItem)
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload
      const index = state.cartItems.findIndex((x: any) => x.id === id)
      if (index >= 0 && quantity >= 1) {
        state.cartItems[index].quantity = quantity
      }
    },
    removeFromCart(state, action) {
      const idNeedToRemove = action.payload
      if (idNeedToRemove) {
        state.cartItems = state.cartItems.filter((x: any) => x.id !== idNeedToRemove)
      }
    },
  },
})
const { actions, reducer } = cartSlice
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions
export default reducer
