'use client'
import {useSession} from 'next-auth/react'
import React from 'react'
import {ClearButton, DefaultButton} from './Buttons'
import {redirect} from 'next/navigation'
import {Stack} from '@mui/material'
import Link from 'next/link'

const SignInButton = () => {
  const {data: session} = useSession()
  console.log({session})

  if (session && session.user)
    return (
      <DefaultButton>
        <Link
          href={'/api/auth/signout'}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}>
          {' '}
          Sign Out
        </Link>
      </DefaultButton>
    )

  return (
    <Stack direction={'row'} sx={{flexGrow: 0}} spacing={2}>
      <ClearButton>
        <Link
          href={'/api/auth/signin'}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}>
          Sign In
        </Link>
      </ClearButton>
      <DefaultButton>
        <Link
          href={'/signup'}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}>
          Sign Up
        </Link>
      </DefaultButton>
    </Stack>
  )
}

export default SignInButton
