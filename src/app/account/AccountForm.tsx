'use client'
import React from 'react'
import {TextField, Grid} from '@mui/material'
import * as Yup from 'yup'

type Type_AccountForm_Props = {email: string}

export const Schema_Account = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

const AccountForm = ({email}: Type_AccountForm_Props) => {
  const onSubmit = () => {}

  return (
    <form onSubmit={onSubmit}>
      <Grid item xs={12}>
        <TextField variant='outlined' fullWidth defaultValue={email} disabled />
      </Grid>
    </form>
  )
}

export default AccountForm
