import { RootState } from './../../app/store'
import { createSelector } from 'reselect'

const cartItemsSelector = (state: RootState) => state.cart.cartItems
// đếm số lượng sản phẩm trong giỏ hàng

export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count: number, item: any) => count + item.quantity, 0)
)
// Tính tổng giá trị sản phẩm trong giỏ hàng
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total: any, item: any) => total + item.payload.price_usd * item.quantity, 0)
)
