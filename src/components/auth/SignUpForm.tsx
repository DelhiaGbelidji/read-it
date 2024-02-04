'use client'
import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import {
  TextField,
  Container,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import {yupResolver} from '@hookform/resolvers/yup'

import {ActionButton} from '@/components/buttons/ActionButton'
import {Schema_SignUp} from '@/schemas'
import {Type_Props_SignUpForm, Type_SignUp_FormData} from '@/types'
import {useRouter} from 'next/navigation'

const SignUpForm = ({email, setEmail, setEmailSent}: Type_Props_SignUpForm) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_SignUp_FormData>({
    resolver: yupResolver(Schema_SignUp),
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const router = useRouter()

  const registerUser = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`/api/signUpUser`, {
      body: JSON.stringify({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const {user} = await res.json()
    setEmailSent(prev => !prev)
    if (user) router.push(`/signup`)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <form onSubmit={handleSubmit(registerUser)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name='firstname'
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  label='First Name'
                  variant='outlined'
                  fullWidth
                  error={!!errors.firstname}
                  helperText={errors.firstname?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name='lastname'
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  label='Last Name'
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
          <Grid item xs={12}>
            <Controller
              name='password'
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  autoComplete='on'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='confirm_password'
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  label='Confirm password'
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.confirm_password}
                  helperText={errors.confirm_password?.message}
                  autoComplete='on'
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <ActionButton type='submit' variant='contained' fullWidth sx={{mt: 3}}>
          Sign Up
        </ActionButton>
      </form>
    </Container>
  )
}

export default SignUpForm
