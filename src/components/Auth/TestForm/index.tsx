import * as React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../common/FormControls/InputField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface TestFormInputs {
  title: string
  fullname: string
}

export interface TestFormProps {
  onSubmit: (value: string) => void
}
export default function TestForm({ onSubmit }: TestFormProps) {
  const schema = yup
    .object({
      title: yup.string().required('Please enter title'),
      fullname: yup.string().required('Please enter title'),
    })
    .required()

  const form = useForm<TestFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmitForm = (values: any) => {
    console.log(values)
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmitForm)}>
      <InputField name="title" label="Test" form={form} control={form.control} />
      <InputField name="fullname" label="fullname" form={form} control={form.control} />
      <input type="submit" />
    </form>
  )
}
