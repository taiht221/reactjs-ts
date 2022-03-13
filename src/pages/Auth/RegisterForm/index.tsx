import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, DialogTitle, LinearProgress, Typography } from '@mui/material'
import { RegisterFormInputs } from '../../../models/common'
import PasswordField from '../../../components/FormControls/PasswordField'
import InputField from '../../../components/FormControls/InputField'

export interface RegisterFormProps {
  onSubmit: (value: any) => void
}
export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const schema = yup
    .object({
      fullName: yup.string().required('nane is required').trim(),
      // .test('should has at least two words', 'Hãy nhập đầy đủ họ và tên ít nhất 2 từ', (value) => {
      //   return value.spilt(' ').length >= 2;
      // }),
      email: yup.string().required('email is required').email('invalid email').trim(),
      // email: yup.string().required('Nhập họ và tên của bạn.'),
      password: yup.string().required('password is required').trim(),
      // .matches(
      //   '^(?=.*[0-9])(?=.*[A-Z]).{8,32}$',
      //   'Xin hãy nhập ít nhất 8 dài nhất 32 kí tự,có một kí tự viết hoa, có một chữ số  '
      // ),
      retypePassword: yup
        .string()
        .required('Please re-type password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required()

  const form = useForm<RegisterFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmitForm = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values)
    }
  }
  const { isSubmitting } = form.formState
  return (
    <>
      {isSubmitting && <LinearProgress />}
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
          disabled={isSubmitting}
        >
          Create Account
        </Button>
      </form>
    </>
  )
}
