'use client'
import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {
  TextField,
  Container,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {ActionButton} from '@/components/buttons/ActionButton'
import {Type_SignUp_FormData} from '@/utils/types'
import {useRouter} from 'next/navigation'
import {registerUser} from './actions'

export const Schema_SignUp = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
})

const SignUpForm = () => {
  const router = useRouter()

  //Show/hide password
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  //Form handler
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm<Type_SignUp_FormData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(Schema_SignUp),
  })

  async function onSubmit(data: Type_SignUp_FormData) {
    try {
      const result = await registerUser(data)
      const {error} = JSON.parse(result)

      if (!error) {
        reset({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirm_password: '',
        })

        router.push('/welcome')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name='firstname'
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  label='First name'
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
                  label='Last name'
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
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <ActionButton
          type='submit'
          variant='contained'
          fullWidth
          sx={{mt: 3, py: 2}}>
          Sign up
        </ActionButton>
      </form>
    </Container>
  )
}

export default SignUpForm
