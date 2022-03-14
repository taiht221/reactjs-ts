import { unwrapResult } from '@reduxjs/toolkit'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../app/store'
import { RegisterFormInputs } from '../../../models/common'
import RegisterForm from '../RegisterForm'
import { register } from '../userSlice'
import { useSnackbar } from 'notistack'

export interface RegisterProps {
  closeDialog: () => void
}

export default function Register({ closeDialog }: RegisterProps) {
  // const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch: AppDispatch = useDispatch()

  const handleSubmit = async (values: RegisterFormInputs) => {
    try {
      values.username = values.email
      const actions = register(values)
      const resultAction = await dispatch(actions)
      const user = unwrapResult(resultAction)
      // closedialof
      closeDialog()

      enqueueSnackbar('Register successfully!', { variant: 'success' })
    } catch (error: any) {
      if (error) {
        enqueueSnackbar(error?.message, { variant: 'error' })
      }
    }
  }
  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  )
}
