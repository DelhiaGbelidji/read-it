import {supabase} from '@/supabase'
import {Type_SignUp_FormData} from '@/types'
import {NextApiRequest, NextApiResponse} from 'next'
import {NextResponse} from 'next/server'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const {firstname, lastname, email, password}: Type_SignUp_FormData = req.body

  if (!email || !password) {
    return NextResponse.json(
      {error: 'Email and password are required.'},
      {status: 400},
    )
  }

  const {
    data: {user},
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstname: firstname,
        lastname: lastname,
      },
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  })

  console.log('error', error)

  if (error) {
    return NextResponse.json({error: error.message}, {status: 400})
  }
  return NextResponse.json({user}, {status: 200})
}
