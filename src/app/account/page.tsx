import {redirect} from 'next/navigation'

import AccountForm from './AccountForm'
import {getServerSession} from 'next-auth'
import {authOptions} from '../api/auth/[...nextauth]/route'

export default async function PrivatePage() {
  const session = getServerSession(authOptions)

  return <AccountForm />
}
