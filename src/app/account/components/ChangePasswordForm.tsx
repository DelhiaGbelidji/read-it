'use client';
import React, {useState} from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Grid, InputAdornment, IconButton} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {changeUserPassword} from '@/app/api/users/route';
import {Type_ChangePassword} from '@/app/api/users/types';
import {DefaultButton} from '@/components/buttons/Buttons';
import {Styled_TextField} from '@/components/inputText/TextField.style';
import {notifyError, notifySuccess, passwordRules} from '@/utils/constants';

import {Type_Props_AccountTabs} from './AccountTabs';

type Type_ChangePasswordData = {
  old_password?: string;
  new_password?: string;
  confirm_password?: string;
};

const Schema_ChangePasswordForm = Yup.object().shape({
  old_password: Yup.string(),
  new_password: Yup.string().matches(passwordRules, {
    message: 'Please create a stronger password',
  }),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('new_password')],
    'Passwords must match',
  ),
});

const ChangePasswordForm = ({session}: Type_Props_AccountTabs) => {
  //Show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  //Form handler
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_ChangePasswordData>({
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
    resolver: yupResolver(Schema_ChangePasswordForm),
  });

  const onSubmit = async (formData: Type_ChangePasswordData) => {
    const data: Type_ChangePassword = {
      old_password: formData.old_password!,
      new_password: formData.new_password!,
    };

    try {
      const {error} = await changeUserPassword(
        session.user.id,
        data,
        session.backendTokens.accessToken,
      );

      if (error) {
        notifyError(error);
      } else {
        notifySuccess('Password has been updated successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name='old_password'
            control={control}
            render={({field}) => (
              <Styled_TextField
                {...field}
                label='Current Password'
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
                error={!!errors.old_password}
                helperText={errors.old_password?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='new_password'
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
                error={!!errors.new_password}
                helperText={errors.new_password?.message}
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
        <DefaultButton
          type='submit'
          variant='contained'
          fullWidth
          sx={{mt: 3, py: 2}}>
          Update password
        </DefaultButton>
      </Grid>
    </form>
  );
};

export default ChangePasswordForm;
