import {NextAuthOptions} from 'next-auth'
import NextAuth from 'next-auth/next'
import {JWT} from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

import {BACKEND_URL} from '@/utils/constants'

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(BACKEND_URL + '/auth/refresh', {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  })
  console.log('refreshed')

  const response = await res.json()

  return {
    ...token,
    backendTokens: response,
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null
        const {username, password} = credentials
        const res = await fetch(BACKEND_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.status === 401) {
          console.log(res.statusText)
          return null
        }
        const user = await res.json()
        return user
      },
    }),
  ],
  pages: {
    signIn: '/auth', 
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) return {...token, ...user}

      if (new Date().getTime() < token.backendTokens.expiresIn) return token

      return await refreshToken(token)
    },

    async session({token, session}) {
      session.user = token.user
      session.backendTokens = token.backendTokens

      return session
    },
  },
  secret: process?.env.NEXTAUTH_SECRET!
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
