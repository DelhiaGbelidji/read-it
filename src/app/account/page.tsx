import UpdateUserForm from '../../components/account/UpdateUserForm'
import {getServerSession} from 'next-auth'
import {authOptions} from '../api/auth/[...nextauth]/route'
import {Box, Divider, Stack, Typography} from '@mui/material'
import DeleteUser from '../../components/account/DeleteUserForm'
import {COLORS} from '@/utils/theme'
import AccountTabs from '@/components/account/AccountTabs'

export default async function PrivatePage() {
  const session = getServerSession(authOptions)

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <AccountTabs />
    </Box>
  )
}
