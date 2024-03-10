import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {signIn} from 'next-auth/react'
import {redirect, useRouter} from 'next/navigation'

import {TextField, Grid, InputAdornment, IconButton} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

import {DefaultButton} from '@/components/buttons/Buttons'
import {notifyError} from '@/utils/constants'

type Type_Login = {
  username: string
  password: string
}

export const Schema_Login = Yup.object().shape({
  username: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const LoginForm = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_Login>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(Schema_Login),
  })

  const onSubmit = async (data: Type_Login) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        username: data.username,
        password: data.password,
      })

      if (result?.error) {
        notifyError('Username or password is incorrect')
      }
      router.push('/projects')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name='username'
            control={control}
            render={({field}) => (
              <TextField
                autoComplete='off'
                {...field}
                label='Email'
                variant='outlined'
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
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
                autoComplete='off'
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
      <DefaultButton
        type='submit'
        variant='contained'
        fullWidth
        sx={{mt: 3, py: 2}}>
        Login
      </DefaultButton>
    </form>
  )
}

export default LoginForm
