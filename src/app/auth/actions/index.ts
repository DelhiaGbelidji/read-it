'use server'
import {createClient} from '@/utils/supabase/server'
import {Type_Auth} from '@/utils/types'
import {cookies} from 'next/headers'

export async function signInWithEmailAndPassword(
  data: Omit<Type_Auth, 'confirm_password'>,
) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const result = await supabase.auth.signInWithPassword(data)
  return JSON.stringify(result)
}

export async function registerUser(data: Type_Auth) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: '/api/auth/callback',
    },
  })
  return JSON.stringify(result)
}
