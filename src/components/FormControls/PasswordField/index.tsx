import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React, { useState } from 'react'
import { Controller, useController } from 'react-hook-form'

export interface PasswordFieldProps {
  form: Object
  label: string
  disabled?: boolean
  name: string
  control: any
  defaultValue?: string
  autocomplete: string
  placeholder: string
}

type passwordState = false | true
export default function PasswordField(props: PasswordFieldProps) {
  const { form, label, disabled, name, control, defaultValue, autocomplete, placeholder } = props
  const { field, fieldState, formState } = useController(props)
  // console.log(field, fieldState, formState)
  // const [showPassword, setShowPassword] = useState(false)
  // const handleClickShowPassword = () => {
  //   setShowPassword((x) => !x)
  // }
  const [showPassword, setShowPassword] = useState<passwordState>(false)

  const handleClickShowPassword = () => {
    setShowPassword((x) => !x)
  }
  return (
    <Box>
      <InputLabel
        htmlFor={name}
        required
        sx={{ color: '#0f3460', fontWeight: '400', marginTop: '0.5rem' }}
      >
        {label}
      </InputLabel>
      <FormControl margin="dense" variant="outlined" fullWidth>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, onBlur, value, name },
            fieldState: { invalid, error },
          }) => (
            <>
              <OutlinedInput
                onChange={onChange}
                onBlur={onBlur}
                defaultValue={defaultValue}
                value={value}
                id={name}
                autoComplete={autocomplete}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                error={invalid}
                disabled={disabled}
                classes={{ focused: 'dff' }}
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
              />
              <FormHelperText sx={{ color: '#ff1744' }}>{error?.message}</FormHelperText>
            </>
          )}
        ></Controller>
      </FormControl>
    </Box>
  )
}
