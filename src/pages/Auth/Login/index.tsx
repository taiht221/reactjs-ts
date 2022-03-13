import { useDispatch } from 'react-redux'
import LoginForm from '../LoginForm'

function Login() {
  const handleSubmit = (value: any) => {
    console.log(value)
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Login
