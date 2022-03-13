import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@mui/material'
import PasswordField from '../../../components/FormControls/PasswordField'
import InputField from '../../../components/FormControls/InputField'

interface LoginFormInputs {
  fullName: string
  email: string
  password: string
  retypePassword: string
}

export interface LoginFormProps {
  onSubmit: (value: string) => void
}
export default function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup
    .object({
      fullName: yup.string().required('nane is required').trim(),
      // .test('should has at least two words', 'Hãy nhập đầy đủ họ và tên ít nhất 2 từ', (value) => {
      //   return value.spilt(' ').length >= 2;
      // }),
      email: yup.string().required('email is required').email('invalid email').trim(),
      // email: yup.string().required('Nhập họ và tên của bạn.'),
      password: yup
        .string()
        .required('password is required')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
      retypePassword: yup
        .string()
        .required('Please re-type password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required()

  const form = useForm<LoginFormInputs>({
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
