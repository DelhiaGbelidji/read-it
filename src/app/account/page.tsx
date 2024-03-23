import {getServerSession} from 'next-auth'
import {Box} from '@mui/material'
import AccountTabs from './components/AccountTabs'
import {redirect} from 'next/navigation'
import {authOptions} from '../api/auth/[...nextauth]/options'

const AccountPage = async () => {
  const session = await getServerSession(authOptions)
  const response = await fetch(
    `${process.env.BACKEND_URL} /user/${session?.user.id}`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${session?.backendTokens.accessToken}`,
        'Content-Type': 'application/json',
      },
    },
  )
  if (!session) redirect('/auth')

  const user = await response.json()

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <AccountTabs session={session} user={user} />
    </Box>
  )
}

export default AccountPage
