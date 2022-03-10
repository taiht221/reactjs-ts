import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

export interface InputFieldProps {
  form?: Object
  name: string
  label: string
  disabled: boolean
}
export interface TextFieldProps {
  onChange: (value: any) => void
  onBlur: () => void
  value: any
  name: string
}
function InputField({ form, name, label, disabled }: InputFieldProps) {
  const { errors} = form
  const hasError: = errors[name]
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, onBlur, value, name }: TextFieldProps) => (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    >
      <TextField />
    </Controller>
  )
}

export default InputField
