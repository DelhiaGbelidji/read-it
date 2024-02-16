import { NextResponse, type NextRequest } from 'next/server'
import { createSupabaseReqResClient } from './supabase'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createSupabaseReqResClient(request, response)

  await supabase.auth.getUser()

  return response
}

export const config = {
  matcher: ['/', '/account'],
}