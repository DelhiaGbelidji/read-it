'use client';
import {useState} from 'react';
import {Box, Stack, Tab, Typography} from '@mui/material';
import {TabContext} from '@mui/lab';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Styled_TabList, Styled_TabPanel} from '@/components/tabs/Tabs.style';

const AuthTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack direction='column' spacing={2} alignItems='center'>
      <Typography fontSize={33} sx={{fontWeight: 700}}>
        Good to see you ! 🤗
      </Typography>

      <TabContext value={value}>
        <Box>
          <Styled_TabList
            onChange={handleChange}
            aria-label='auth tabs'
            centered>
            <Tab label='Login' value='1' />
            <Tab label='Sign Up' value='2' />
          </Styled_TabList>
        </Box>
        <Styled_TabPanel value='1'>
          <LoginForm />
        </Styled_TabPanel>
        <Styled_TabPanel value='2'>
          <SignUpForm />
        </Styled_TabPanel>
      </TabContext>
    </Stack>
  );
};

export default AuthTabs;
