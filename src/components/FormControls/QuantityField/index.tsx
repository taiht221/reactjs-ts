import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { Controller, useController } from 'react-hook-form'

export interface QuantityFieldProps {
  form: Object
  label: string
  disabled?: boolean
  name: string
  control: any
  defaultValue?: string
  setValue: any
}

export function QuantityField(props: QuantityFieldProps) {
  const { form, label, disabled, name, control, setValue } = props
  const { field, fieldState, formState } = useController(props)
  return (
    <FormControl variant="outlined" margin="normal" size="small" fullWidth>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <>
            <Stack
              direction="row"
              sx={{ flexWrap: 'nowrap', alignItems: 'center', maxWidth: '150px' }}
            >
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
                }
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                id={name}
                disabled={disabled}
                value={value > 1 ? value : 1}
                onChange={onChange}
                onBlur={onBlur}
                error={invalid}
              />
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Stack>
            <FormHelperText sx={{ color: '#ff1744' }}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </FormControl>
  )
}
