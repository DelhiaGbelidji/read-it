import {Box} from '@mui/material'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <SignUpForm />
    </Box>
  )
}

export default SignUp
