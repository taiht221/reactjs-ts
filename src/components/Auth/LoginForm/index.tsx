import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import InputField from 'components/form-controls/InputField/Index'
import PasswordField from 'components/form-controls/PasswordField'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

export interface LoginFormProps {
  onSubmit: () => void
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Nhập email của bạn')
      .email('Hãy nhập đúng định dạng email')
      .trim(),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
    password: yup.string().required('Nhập mật khẩu của bạn.'),
  })
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values)
    }
    form.reset()
  }
  return (
    <div>
      <Avatar>
        <LockOutlined />
      </Avatar>
      <Typography component="h3" variant="h5">
        Đăng nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Mật Khẩu" />
        <Button type="submit" variant="contained" fullWidth size="large" disabled>
          Đăng nhập
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
