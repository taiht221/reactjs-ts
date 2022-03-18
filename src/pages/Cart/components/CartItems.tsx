import * as React from 'react'

export interface CartItemsProps {
  data: any
  onSubmit: (values: any) => void
}

export default function CartItems({ data, onSubmit }: CartItemsProps) {
  return <div>CartItems</div>
}
