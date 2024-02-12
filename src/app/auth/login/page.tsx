import {Box, Typography, Stack} from '@mui/material'
import {redirect} from 'next/navigation'
import '@fontsource/roboto/500.css'

import LoginForm from './LoginForm'

export default async function LoginPage() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <Stack direction='column' spacing={4} alignItems='center'>
        <Typography fontSize={33} sx={{fontWeight: 700}}>
          Good to see you again !<br />
          Let’s continue the journey.
        </Typography>
        <LoginForm />
      </Stack>
    </Box>
  )
}
