import {supabase} from '@/supabase'
import {NextApiRequest, NextApiResponse} from 'next'
import {NextResponse} from 'next/server'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const {user} = req.body

  const {error} = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  })

  console.log('error', error)

  if (error) {
    return NextResponse.json({error: error.message}, {status: 400})
  }

  return NextResponse.json({user}, {status: 200})
}


// data: {
//   firstname: user.firstname,
//   lastname: user.lastname,
// // },