'use client'
import {WarningButton} from '@/components/buttons/Buttons'
import {COLORS} from '@/utils/theme'
import {Box, Typography, useMediaQuery} from '@mui/material'

const DeleteUser = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const spacing = isMobile ? 2 : 4
  const handleClick = () => {
    console.log('delete user')
  }
  return (
    <WarningButton onClick={handleClick} fullWidth sx={{mt: 3, py: 2}}>
      Delete permanently
    </WarningButton>
  )
}

export default DeleteUser
