'use client'
import {Box, Container} from '@mui/material'
import {COLORS} from '@/utils/theme'

export const Footer = () => {
  return (
    <Box
      position='static'
      sx={{
        top: 'auto',
        bottom: 0,
        width: '100%',
        height: '70px',
        backgroundColor: COLORS.lightGrey,
      }}></Box>
  )
}
