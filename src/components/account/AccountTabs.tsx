'use client'
import {useState} from 'react'
import {Box, Stack, Tab, Typography} from '@mui/material'
import {TabContext} from '@mui/lab'

import {Styled_TabList, Styled_TabPanel} from '../tabs/Tabs.style'
import UpdateUserForm from './UpdateUserForm'
import ChangePasswordForm from './ChangePasswordForm'
import DeleteUserForm from './DeleteUserForm'

const AccountTabs = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Stack direction='column' spacing={2} alignItems='center'>
      <Typography fontSize={33} sx={{fontWeight: 700}}>
        Update your information 👀
      </Typography>

      <TabContext value={value}>
        <Box>
          <Styled_TabList
            onChange={handleChange}
            aria-label='account-tabs'
            centered>
            <Tab label='Personal information' value='1' />
            <Tab label='Change password' value='2' />
            <Tab label='Delete profile' value='3' />
          </Styled_TabList>
        </Box>
        <Styled_TabPanel value='1'>
          <UpdateUserForm />
        </Styled_TabPanel>
        <Styled_TabPanel value='2'>
          <ChangePasswordForm />
        </Styled_TabPanel>
        <Styled_TabPanel value='3'>
          <DeleteUserForm />
        </Styled_TabPanel>
      </TabContext>
    </Stack>
  )
}

export default AccountTabs
