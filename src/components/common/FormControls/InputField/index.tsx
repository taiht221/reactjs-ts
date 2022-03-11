import React from 'react'
import PropTypes from 'prop-types'
import { Controller, useController } from 'react-hook-form'
import { Box, TextField } from '@mui/material'

export interface InputFieldProps {
  form: Object
  label: string
  disabled?: boolean
  name: string
  control: any
}

export default function InputField(props: InputFieldProps) {
  const { form, label, disabled, name, control } = props
  const { field, fieldState, formState } = useController(props)
  // console.log(field, fieldState, formState)
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
          placeholder="fsafdasdf"
        />
      )}
    ></Controller>
  )
}
