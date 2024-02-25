import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {TextField, Grid, InputAdornment, IconButton} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {signIn} from 'next-auth/react'
import {DefaultButton} from '@/components/buttons/Buttons'
import {useRouter} from 'next/navigation'

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
  const [loginError, setLoginError] = useState('')

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
  } = useForm<Type_Login>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(Schema_Login),
  })

  const onSubmit = async (data: Omit<Type_Login, 'confirm_password'>) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: data.username,
      password: data.password,
    })

    if (result?.error) {
      setLoginError(result.error)
    }
    router.push('/account')
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
