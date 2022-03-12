import { useForm } from 'react-hook-form'
import InputField from '../../common/FormControls/InputField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@mui/material'
import PasswordField from '../../common/FormControls/PasswordField'

interface RegisterFormInputs {
  fullName: string
  email: string
  password: string
  retypePassword: string
}

export interface RegisterFormProps {
  onSubmit: (value: string) => void
}
export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const schema = yup.object({}).required()

  const form = useForm<RegisterFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmitForm = (values: any) => {
    console.log(values)
    if (onSubmit) {
      onSubmit(values)
    }
    form.reset()
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmitForm)}>
      <InputField
        name="fullName"
        label="Full Name"
        form={form}
        control={form.control}
        autocomplete="username"
        placeholder="Tai Huynh"
      />
      <InputField
        name="email"
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
      <PasswordField
        name="retypePassword"
        label="Retype Password"
        form={form}
        control={form.control}
        autocomplete="current-password"
        placeholder="******"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: '1rem' }}
      >
        Create Account
      </Button>
    </form>
  )
}
