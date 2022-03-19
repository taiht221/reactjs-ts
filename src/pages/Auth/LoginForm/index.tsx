import { yupResolver } from '@hookform/resolvers/yup'
import { Button, DialogTitle, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../components/FormControls/InputField'
import PasswordField from '../../../components/FormControls/PasswordField'

interface LoginFormInputs {
  identifier: string
  password: string
}

export interface LoginFormProps {
  onSubmit: (value: any) => void
}
export default function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup
    .object({
      identifier: yup.string().required('email is required').email('invalid email').trim(),
      // email: yup.string().required('Nhập họ và tên của bạn.'),
      password: yup.string().required('password is required'),
    })
    .required()

  const form = useForm<LoginFormInputs>({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmitForm = (values: any) => {
    if (onSubmit) {
      onSubmit(values)
    }
    form.reset()
  }
  return (
    <>
      <DialogTitle
        id="alert-dialog-title"
        sx={{ textAlign: 'center', fontWeight: '700', color: '#0f3460' }}
      >
        Welcome To Ecommerce
      </DialogTitle>
      <Typography sx={{ textAlign: 'center', fontWeight: '400', fontSize: '0.8rem' }}>
        Log in with email & password
      </Typography>
      <form onSubmit={form.handleSubmit(onSubmitForm)}>
        <InputField
          name="identifier"
          label="Email"
          form={form}
          control={form.control}
          autocomplete="email"
          placeholder="example@mail.com"
        />
        <PasswordField
          name="password"
          label="Password"
          form={form}
          control={form.control}
          autocomplete="new-password"
          placeholder="******"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
    </>
  )
}
