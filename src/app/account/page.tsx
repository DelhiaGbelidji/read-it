import {getServerSession} from 'next-auth'
import {authOptions} from '../api/auth/[...nextauth]/route'
import {Box} from '@mui/material'
import AccountTabs from './components/AccountTabs'

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
