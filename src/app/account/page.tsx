import {getServerSession} from 'next-auth'
import {authOptions} from '../api/auth/[...nextauth]/route'
import {Box} from '@mui/material'
import AccountTabs from '@/components/account/AccountTabs'
import {BACKEND_URL} from '@/utils/constants'
import {redirect} from 'next/navigation'

const AccountPage = async () => {
  const session = await getServerSession(authOptions)
  const response = await fetch(BACKEND_URL + `/user/${session?.user.id}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      'Content-Type': 'application/json',
    },
  })

  const user = await response.json()

  if (!session) redirect('/auth')

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <AccountTabs session={session} />
    </Box>
  )
}

export default AccountPage
