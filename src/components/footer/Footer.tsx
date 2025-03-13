'use client';
import {Box} from '@mui/material';

import {COLORS} from '@/utils/theme';

const Footer = () => {
  return (
    <Box
      position='fixed'
      sx={{
        top: 'auto',
        bottom: 0,
        width: '100%',
        height: '60px',
        backgroundColor: COLORS.lightGrey,
        zIndex: 999,
      }}></Box>
  );
};
export default Footer;
