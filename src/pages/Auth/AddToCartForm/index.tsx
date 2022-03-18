import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { QuantityField } from '../../../components/FormControls/QuantityField'

export interface AddToCartFormProps {
  onSubmit: any
}
export interface QuantityFormInput {
  quantity: string | number
}
function AddToCartForm({ onSubmit = null }: AddToCartFormProps) {
  const schema = yup.object({
    quantity: yup
      .number()
      .required('Hãy nhập số lượng sản phẩm')
      .min(1, 'Hãy chọn ít nhất 1 sản phẩm')
      .typeError('Xin hãy nhập số'),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
  })
  const form = useForm<QuantityFormInput>({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      quantity: 1,
    },
    resolver: yupResolver(schema),
  })
  const handleCartSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values)
    }
    form.reset()
  }
  return (
    <form onSubmit={form.handleSubmit(handleCartSubmit)}>
      <QuantityField
        form={form}
        name="quantity"
        label="Quantity"
        control={form.control}
        setValue={form.setValue}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        style={{ maxWidth: '300px', width: '100%', color: 'white' }}
      >
        Add To Cart
      </Button>
    </form>
  )
}

export default AddToCartForm
