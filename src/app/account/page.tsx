import UpdateUserForm from './UpdateUserForm'
import {getServerSession} from 'next-auth'
import {authOptions} from '../api/auth/[...nextauth]/route'
import {Box, Divider, Stack, Typography} from '@mui/material'
import DeleteUser from './Deleteuser'
import {COLORS} from '@/utils/theme'

export default async function PrivatePage() {
  const session = getServerSession(authOptions)

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <Stack
        direction='column'
        spacing={2}
        alignItems='center'
        style={{maxWidth: '500px', margin: 'auto'}}>
        <Typography fontSize={33} sx={{fontWeight: 700}}>
          Change your profile
        </Typography>
        <UpdateUserForm />
        <Divider sx={{width: '100%', my: 2, color: `${COLORS.neutral700}`}}>
          Delete profile
        </Divider>
        <DeleteUser />
      </Stack>
    </Box>
  )
}
