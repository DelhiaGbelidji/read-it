'use client'
import React from 'react'
import {TextField, Grid} from '@mui/material'
import * as Yup from 'yup'
import {DefaultButton} from '@/components/buttons/Buttons'

type Type_AccountForm_Props = {email: string}

export const Schema_Account = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

const AccountForm = () => {
  const onSubmit = () => {}

  return (
    <form action='/api/auth/signout' method='post'>
      <Grid item xs={12}>
        <TextField variant='outlined' fullWidth disabled />
      </Grid>
      <DefaultButton type='submit'> Log out</DefaultButton>
    </form>
  )
}

export default AccountForm
