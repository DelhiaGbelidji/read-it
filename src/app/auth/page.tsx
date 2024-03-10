import '@fontsource/roboto/500.css'
import React from 'react'
import {Toaster} from 'react-hot-toast'
import {Box} from '@mui/material'
import AuthTabs from './components/AuthTabs'

const AuthPage = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <Toaster />
      <AuthTabs />
    </Box>
  )
}

export default AuthPage
