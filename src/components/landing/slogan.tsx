import React from 'react';

import {Typography, useTheme, useMediaQuery} from '@mui/material';
import {Barrio} from 'next/font/google';
const barrio = Barrio({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function CustomSloganTypography() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      sx={{
        fontFamily: barrio.style.fontFamily,
        fontSize: isMobile ? 24 : 40,
        fontWeight: 700,
        color: 'black',
        textAlign: isMobile ? 'center' : 'left',
        '& span': {
          display: 'block',
          color: '#F7195C',
        },
      }}>
      <span>Reading</span>
      embraces all differences!
    </Typography>
  );
}
