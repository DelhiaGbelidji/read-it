import {Box} from '@mui/material'
import '@fontsource/roboto/500.css'
import AuthForm from './components/AuthForm'
import React from 'react'

export default async function AuthPage() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <AuthForm />
    </Box>
  )
}
