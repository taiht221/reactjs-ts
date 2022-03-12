import { Controller, useController } from 'react-hook-form'
import { Box, InputLabel, TextField } from '@mui/material'

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
        <>
          <InputLabel
            htmlFor={name}
            required
            sx={{ color: '#0f3460', fontWeight: '400', marginTop: '0.5rem' }}
          >
            {label}
          </InputLabel>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disabled}
            placeholder="fsafdasdf"
          />
        </>
      )}
    ></Controller>
  )
}
