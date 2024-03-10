'use client'
import {WarningButton} from '@/components/buttons/Buttons'
import * as Yup from 'yup'
import {Checkbox, FormControlLabel, Grid, Typography} from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

type Type_DeleteUserData = {
  confirm_delete?: boolean
}

const Schema_DeleteUserForm = Yup.object().shape({
  confirm_delete: Yup.boolean().oneOf(
    [true],
    'You must confirm that you agree to delete your profile',
  ),
})

const DeleteUserForm = () => {
  //Form handler
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_DeleteUserData>({
    defaultValues: {
      confirm_delete: false,
    },
    resolver: yupResolver(Schema_DeleteUserForm),
  })

  const onSubmit = () => {
    console.log('user deleted')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant='h6'>
            We are sad to see you leave... 😭
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Once you delete your profile, it is definitive. Are you sure?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='confirm_delete'
            control={control}
            render={({field}) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    onChange={e => field.onChange(e.target.checked)}
                    checked={field.value}
                  />
                }
                label='I confirm I want to delete my profile'
              />
            )}
          />
          {errors.confirm_delete && (
            <Typography
              variant='caption'
              display='block'
              gutterBottom
              sx={{color: 'red'}}>
              {' '}
              {/* Assurez-vous que la couleur est correctement référencée */}
              {errors.confirm_delete.message}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <WarningButton
            type='submit'
            variant='contained'
            fullWidth
            sx={{mt: 3, py: 2}}>
            Delete permanently
          </WarningButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default DeleteUserForm
// Once you delete your account, there is no going back. Please be certain.
