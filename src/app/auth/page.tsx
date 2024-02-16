import {Box, Container, Typography} from '@mui/material'
import Stack from '@mui/material/Stack'
import '@fontsource/roboto/500.css'
import AuthForm from './components/AuthForm'
import React from 'react'
import {redirect} from 'next/navigation'
import {readUserSession} from '@/utils/actions'

export default async function AuthPage() {
  const {data} = await readUserSession()

  if (data.session) {
    return redirect('/')
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='90vh'>
        <Stack direction='column' spacing={4} alignItems='center'>
          <Typography fontSize={33} sx={{fontWeight: 700}}>
            Good to see you !
          </Typography>
          <AuthForm />
        </Stack>
      </Box>
    </Container>
  )
}
