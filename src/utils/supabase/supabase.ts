import { createServerClient, type CookieOptions, createBrowserClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { getCookie, setCookie } from "cookies-next";
import { NextRequest, NextResponse } from 'next/server';

//Server
export function createSupabaseServerClient(serverComponent= false) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies().get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            if(serverComponent) return
            cookies().set({ name, value, ...options })
          } catch (error) {
              console.error(error)
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            if(serverComponent) return
            cookies().set({ name, value: "", ...options })
          } catch (error) {
			        console.error(error)
          }
        },
      },
    }
  )
}


export function createSupabaseServerComponentClient() {
  return createSupabaseServerClient(true);
}

//Client
export function createSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

//Req/Res Client
export function createSupabaseReqResClient(req: NextRequest, res: NextResponse) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      cookies: {
        get(name) {
          return getCookie(name, { req, res });
        },
        set(name, value, options) {
          setCookie(name, value, { req, res, ...options });
        },
        remove(name, options) {
          setCookie(name, "", { req, res, ...options });
        },
      },
    }
  );
}