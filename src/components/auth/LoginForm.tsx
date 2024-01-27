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
import {Schema_Login} from '@/schemas'
import {Type_Login_Data} from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_Login_Data>({
    resolver: yupResolver(Schema_Login),
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const router = useRouter()
  const supabase = createClientComponentClient()

   const onSubmit = async (data: Type_Login_Data) => {
    try {

      await supabase.auth.signInWithPassword({
         email: data.email,
         password: data.password,
      
    })
    router.refresh()
    } catch {
      console.error('error')
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
                  autoComplete='on'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <ActionButton type='submit' variant='contained' fullWidth sx={{mt: 3}}>
          Login
        </ActionButton>
      </form>
    </Container>
  )
}

export default LoginForm
