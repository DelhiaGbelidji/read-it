'use client';
import {WarningButton} from '@/components/buttons/Buttons';
import * as Yup from 'yup';
import {Checkbox, FormControlLabel, Grid, Typography} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Type_Props_AccountTabs} from './AccountTabs';
import {deleteUser} from '@/app/api/users/route';
import {notifyError, notifySuccess} from '@/utils/constants';
import {COLORS} from '@/utils/theme';

type Type_DeleteUserData = {
  confirm_delete?: boolean;
};

const Schema_DeleteUserForm = Yup.object().shape({
  confirm_delete: Yup.boolean().oneOf(
    [true],
    'You must confirm that you agree to delete your profile',
  ),
});

const DeleteUserForm = ({session}: Type_Props_AccountTabs) => {
  console.log(session);
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
  });

  const onSubmit = async () => {
    try {
      const {error, response} = await deleteUser(
        session.user.id,
        session.backendTokens.accessToken,
      );
      if (error) {
        notifyError(error);
      }
      notifySuccess(response);
    } catch (error) {
      console.error(error);
    }
  };

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
              sx={{color: COLORS.red500}}>
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
  );
};

export default DeleteUserForm;
