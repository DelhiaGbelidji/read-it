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
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {ActionButton} from '@/components/buttons/ActionButton'
import {Type_Login_FormData} from '@/utils/types'
import {signInWithEmailAndPassword} from './actions'
import {useRouter} from 'next/navigation'

export const Schema_Login = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const LoginForm = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<Type_Login_FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(Schema_Login),
  })

  const onSubmit = async (data: Type_Login_FormData) => {
    try {
      const result = await signInWithEmailAndPassword(data)
      const {error} = JSON.parse(result)

      if (!error) {
        reset({
          email: '',
          password: '',
        })

        console.log('Logged in with success')
        router.push('/account')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
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
        </Grid>
        <ActionButton
          type='submit'
          variant='contained'
          fullWidth
          sx={{mt: 3, py: 2}}>
          Login
        </ActionButton>
      </form>
    </Container>
  )
}

export default LoginForm
