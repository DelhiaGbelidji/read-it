'use server'
import { redirect } from 'next/navigation'

import { createSupabaseServerClient } from '@/utils/supabase/server'
import { Type_SignUp_FormData } from '@/utils/types'

export async function register(formData: Type_SignUp_FormData) {
  debugger;
  const supabase =  await createSupabaseServerClient()

 const result = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
      firstname: formData.firstname,
      lastname: formData.lastname
    }}
  })
  return JSON.stringify(result)
}