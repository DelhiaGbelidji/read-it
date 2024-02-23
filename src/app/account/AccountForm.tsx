'use client'
import React from 'react'
import {TextField, Grid} from '@mui/material'
import * as Yup from 'yup'
import {Default_Button} from '@/components/buttons/Buttons'

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
      <Default_Button type='submit'> Log out</Default_Button>
    </form>
  )
}

export default AccountForm
