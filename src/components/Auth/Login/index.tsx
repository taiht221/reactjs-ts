import { useDispatch } from 'react-redux'
import LoginForm from '../LoginForm'
export interface LoginProps {
  closeDialog: () => void
}

function Login({ closeDialog }: LoginProps) {
  const handleSubmit = (values: any) => {
    try {
      const action = loginUser(values)

      //close dialog
      // return result;
      setTimeout(() => {
        if (closeDialog) {
          closeDialog()
        }
      }, 1000)
    } catch (error) {
      console.log(error)
    }

    // const handleSubmit = (values) => {
    //   dispatch(getUser(values));
    // };
    // useEffect(() => {}, [message]);
  }
  return <LoginForm onSubmit={handleSubmit} />
}

export default Login
