import '@fontsource/roboto/500.css';
import React from 'react';

import {Box} from '@mui/material';

import AuthTabs from './components/AuthTabs';

const AuthPage = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <AuthTabs />
    </Box>
  );
};

export default AuthPage;
