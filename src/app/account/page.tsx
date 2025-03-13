import {Box} from '@mui/material';
import {redirect} from 'next/navigation';
import {getServerSession} from 'next-auth';

import {BACKEND_URL} from '@/utils/constants';

import AccountTabs from './components/AccountTabs';
import {authOptions} from '../api/auth/[...nextauth]/options';

const AccountPage = async () => {
  const session = await getServerSession(authOptions);
  const response = await fetch(BACKEND_URL + `/user/${session?.user.id}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  if (!session) redirect('/auth');

  const user = await response.json();

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'>
      <AccountTabs session={session} user={user} />
    </Box>
  );
};

export default AccountPage;
