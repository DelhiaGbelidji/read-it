import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {TextField, Grid, InputAdornment, IconButton} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {Default_Button} from '@/components/buttons/Buttons'
import {Type_Auth} from '@/utils/types'
import {useRouter} from 'next/navigation'
import {registerUser} from '../actions'

export const Schema_SignUp = Yup.object().shape({
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
    formState: {errors},
  } = useForm<Type_Auth>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(Schema_SignUp),
  })

  // const handleCreateUser = async (id: string) => {
  //   await fetch('/api/users', {
  //     method: 'put',
  //     body: JSON.stringify({id}),
  //   })
  // }

  async function onSubmit(data: Type_Auth) {
    try {
      const result = await registerUser(data)
      const {error} = JSON.parse(result)
      console.log(error)
      if (!error) {
        reset({
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
      <Default_Button
        type='submit'
        variant='contained'
        fullWidth
        sx={{mt: 3, py: 2}}>
        Sign up
      </Default_Button>
    </form>
  )
}

export default SignUpForm
