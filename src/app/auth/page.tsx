import {Box} from '@mui/material'
import '@fontsource/roboto/500.css'
import AuthForm from './components/AuthForm'
import React from 'react'
import {redirect} from 'next/navigation'
import {readUserSession} from '@/utils/actions'

export default async function AuthPage() {
  const {data} = await readUserSession()

  if (data.session) {
    return redirect('/account')
  }

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
