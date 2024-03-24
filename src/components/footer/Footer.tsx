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
      }}></Box>
  );
};
export default Footer;
