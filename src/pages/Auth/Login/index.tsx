import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../app/store'
import { LoginFormInputs } from '../../../models/common'
import LoginForm from '../LoginForm'
import { login } from '../userSlice'

export interface LoginProps {
  closeDialog: () => void
}

function Login({ closeDialog }: LoginProps) {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch: AppDispatch = useDispatch()
  const handleSubmit = async (values: LoginFormInputs) => {
    try {
      const actions = login(values)
      const resultAction = await dispatch(actions)
      const user = unwrapResult(resultAction)
      // closedialof
      closeDialog()
    } catch (error: any) {
      if (error) {
        enqueueSnackbar(error?.message, { variant: 'error' })
      }
    }
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Login
