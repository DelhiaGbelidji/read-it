import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

import {createClient} from '@/utils/supabase/server'
import AccountForm from './AccountForm'

export default async function PrivatePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return <AccountForm email={data.user.email as string} />
}
