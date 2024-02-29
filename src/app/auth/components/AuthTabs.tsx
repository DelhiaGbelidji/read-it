'use client'
import {useState} from 'react'
import {Box, Stack, Tab, Typography} from '@mui/material'
import {TabPanel, TabContext} from '@mui/lab'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {StyledTabList} from '@/components/tabs/Tabs.style'

const AuthTabs = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Stack direction='column' spacing={4} alignItems='center'>
      <Typography fontSize={33} sx={{fontWeight: 700}}>
        Good to see you ! 🤗
      </Typography>

      <Box>
        <TabContext value={value}>
          <Box>
            <StyledTabList
              onChange={handleChange}
              aria-label='auth tabs'
              centered>
              <Tab label='Login' value='1' />
              <Tab label='Sign Up' value='2' />
            </StyledTabList>
          </Box>
          <TabPanel value='1'>
            <LoginForm />
          </TabPanel>
          <TabPanel value='2'>
            <SignUpForm />
          </TabPanel>
        </TabContext>
      </Box>
    </Stack>
  )
}

export default AuthTabs
