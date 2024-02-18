'use client'
import {useState} from 'react'
import {Box, Tab} from '@mui/material'
import {TabPanel, TabContext} from '@mui/lab'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {StyledTabList} from '@/components/tabs/Tabs.style'

export default function AuthTabs() {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
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
  )
}
