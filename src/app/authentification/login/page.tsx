import {Box} from '@mui/material'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <LoginForm />
    </Box>
  )
}

export default Login
