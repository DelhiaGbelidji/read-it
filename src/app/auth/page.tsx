import { Box } from '@mui/material'
import '@fontsource/roboto/500.css'
import AuthForm from './components/AuthForm'
import React from 'react'
import {Toaster} from 'react-hot-toast'

import {Box} from '@mui/material'
import AuthTabs from '../../components/auth/AuthTabs'

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
