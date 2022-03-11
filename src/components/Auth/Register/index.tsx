import * as React from 'react'
import RegisterForm from '../RegisterForm'

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const handleSubmit = (value: any) => {
    console.log(value)
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}
