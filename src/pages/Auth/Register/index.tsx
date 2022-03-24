import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { useAppDispatch } from '../../../app/hook'
import { RegisterFormInputs } from '../../../models/common'
import RegisterForm from '../RegisterForm'
import { register } from '../userSlice'

export interface RegisterProps {
  closeDialog: () => void
}

export default function Register({ closeDialog }: RegisterProps) {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useAppDispatch()

  const handleSubmit = async (values: RegisterFormInputs) => {
    try {
      values.username = values.email
      const actions = register(values)
      const resultAction = await dispatch(actions)
      const user = unwrapResult(resultAction)
      // closedialof
      closeDialog()

      enqueueSnackbar('Register successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Some thing went wrong! Please refresh page again.', { variant: 'error' })
    }
  }
  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  )
}
