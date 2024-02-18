'use client'
import React from 'react'
import {TextField, Grid} from '@mui/material'
import * as Yup from 'yup'
import {ActionButton} from '@/components/buttons/ActionButton'

type Type_AccountForm_Props = {email: string}

export const Schema_Account = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

const AccountForm = ({email}: Type_AccountForm_Props) => {
  const onSubmit = () => {}

  return (
    <form action='/api/auth/signout' method='post'>
      <Grid item xs={12}>
        <TextField variant='outlined' fullWidth defaultValue={email} disabled />
      </Grid>
      <ActionButton type='submit'> Log out</ActionButton>
    </form>
  )
}

export default AccountForm
