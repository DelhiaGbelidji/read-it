import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

import AccountForm from './AccountForm'

export default async function PrivatePage() {
  return <AccountForm />
}
