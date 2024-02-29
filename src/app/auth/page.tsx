import {Box} from '@mui/material'
import '@fontsource/roboto/500.css'
import AuthTabs from './components/AuthTabs'
import React from 'react'

const AuthPage = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <AuthTabs />
    </Box>
  )
}

export default AuthPage
