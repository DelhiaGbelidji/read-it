'use client';
import {useState} from 'react';

import {TabContext} from '@mui/lab';
import {Box, Stack, Tab, Typography} from '@mui/material';
import {Session} from 'next-auth';

import {Type_User} from '@/app/api/users/types';
import {Styled_TabList, Styled_TabPanel} from '@/components/tabs/Tabs.style';

import ChangePasswordForm from './ChangePasswordForm';
import DeleteUserForm from './DeleteUserForm';
import UpdateUserForm from './UpdateUserForm';

export type Type_Props_AccountTabs = {
  session: Session;
  user?: Type_User;
};
const AccountTabs = ({session, user}: Type_Props_AccountTabs) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          <UpdateUserForm session={session} user={user} />
        </Styled_TabPanel>
        <Styled_TabPanel value='2'>
          <ChangePasswordForm session={session} />
        </Styled_TabPanel>
        <Styled_TabPanel value='3'>
          <DeleteUserForm session={session} />
        </Styled_TabPanel>
      </TabContext>
    </Stack>
  );
};

export default AccountTabs;
