import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React, { useState } from 'react'
import { useController } from 'react-hook-form'

export interface PasswordFieldProps {
  form: Object
  label: string
  disabled?: boolean
  name: string
  control: any
  defaultValue?: string
}

export interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

export default function PasswordField(props: PasswordFieldProps) {
  const { form, label, disabled, name, control, defaultValue } = props
  const { field, fieldState, formState } = useController(props)
  // console.log(field, fieldState, formState)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x)
  }
  return (
    <div>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  )
}
