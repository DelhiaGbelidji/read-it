// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'

// import type { Database } from '@/utils/types'
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   const data = await request.json();
//   const email = data.email
//   const password = data.password
//   const cookieStore = cookies()
//   const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  
//   return NextResponse.json({
//     data,
//   }, {status:200})
// }
