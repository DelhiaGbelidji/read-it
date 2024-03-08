'use client'
import React from 'react'
import {TextField, Grid} from '@mui/material'
import * as Yup from 'yup'
import {DefaultButton} from '@/components/buttons/Buttons'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Type_Props_AccountTabs} from './AccountTabs'

type Type_UpdateUserData = {
  firstname?: string
  lastname?: string
  email?: string
}

const Schema_UpdateUserForm = Yup.object().shape({
  email: Yup.string().email('Invalid email').optional(),
  firstname: Yup.string().optional(),
  lastname: Yup.string().optional(),
})

const UpdateUserForm = ({session}: Type_Props_AccountTabs) => {
  //Form handler
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_UpdateUserData>({
    defaultValues: {
      firstname: session.user.firstname,
      lastname: session.user.lastname,
      email: session.user.email,
    },
    resolver: yupResolver(Schema_UpdateUserForm),
  })

  const onSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name='firstname'
            control={control}
            render={({field}) => (
              <TextField
                {...field}
                label='Firstname'
                variant='outlined'
                fullWidth
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='lastname'
            control={control}
            render={({field}) => (
              <TextField
                {...field}
                label='Lastname'
                variant='outlined'
                fullWidth
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='email'
            control={control}
            render={({field}) => (
              <TextField
                {...field}
                label='Email'
                variant='outlined'
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <DefaultButton
        type='submit'
        variant='contained'
        fullWidth
        sx={{mt: 3, py: 2}}>
        Save changes{' '}
      </DefaultButton>
    </form>
  )
}

export default UpdateUserForm
