'use client'
import {Box} from '@mui/material'
import SignUpForm from '@/components/auth/SignUpForm'
import {useState} from 'react'
import ConfirmEmail from '@/components/auth/ConfirmEmail'

const SignUp = () => {
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      {!emailSent ? (
        <SignUpForm
          setEmailSent={setEmailSent}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        <ConfirmEmail email={email} />
      )}
    </Box>
  )
}

export default SignUp
