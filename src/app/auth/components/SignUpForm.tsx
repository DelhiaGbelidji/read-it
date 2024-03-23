import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {Grid, InputAdornment, IconButton} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {DefaultButton} from '@/components/buttons/Buttons'
import {useRouter} from 'next/navigation'
import {notifyError, passwordRules} from '@/utils/constants'
import {Styled_TextField} from '@/components/inputText/TextField.style'
import {Type_User} from '@/app/api/users/types'
import {registerUser} from '@/app/api/users/services'

export type Type_SignupData = {
  email: string
  firstname: string
  lastname: string
  password: string
  confirm_password: string
}

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const Schema_SignUp = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  password: Yup.string()
    .matches(passwordRules, {message: 'Please create a stronger password'})
    .required('Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
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
  } = useForm<Type_SignupData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(Schema_SignUp),
  })

  async function onSubmit(data: Type_SignupData) {
    try {
      const user: Type_User = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      }
      const {error} = await registerUser(user)

      if (error) {
        notifyError(error)
      } else {
        router.push('/auth')
      }

      reset({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name='firstname'
            control={control}
            render={({field}) => (
              <Styled_TextField
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
        <Grid item xs={12} sm={6}>
          <Controller
            name='lastname'
            control={control}
            render={({field}) => (
              <Styled_TextField
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
              <Styled_TextField
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
              <Styled_TextField
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
              <Styled_TextField
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
      <DefaultButton
        type='submit'
        variant='contained'
        fullWidth
        sx={{mt: 3, py: 2}}>
        Sign up
      </DefaultButton>
    </form>
  )
}

export default SignUpForm
