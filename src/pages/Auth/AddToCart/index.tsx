import * as React from 'react'
import AddToCartForm, { QuantityFormInput } from '../AddToCartForm'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../app/store'
import { incrementCart } from '../cartSlice'

export function AddToCart() {
  const dispatch = useDispatch()
  const handleAddToCart = async (values: QuantityFormInput) => {
    try {
      dispatch(incrementCart())
    } catch (error: any) {
      if (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <AddToCartForm onSubmit={handleAddToCart} />
    </>
  )
}
