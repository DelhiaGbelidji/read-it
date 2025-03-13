'use client';
import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {Grid} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {updateUser} from '@/app/api/users/route';
import {Type_UpdateUser} from '@/app/api/users/types';
import {DefaultButton} from '@/components/buttons/Buttons';
import {Styled_TextField} from '@/components/inputText/TextField.style';
import {notifyError, notifySuccess} from '@/utils/constants';

import {Type_Props_AccountTabs} from './AccountTabs';

type Type_UpdateUserData = {
  firstname?: string;
  lastname?: string;
  email?: string;
};

const Schema_UpdateUserForm = Yup.object().shape({
  email: Yup.string().email('Invalid email').optional(),
  firstname: Yup.string().optional(),
  lastname: Yup.string().optional(),
});

const UpdateUserForm = ({session, user}: Type_Props_AccountTabs) => {
  //Form handler
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Type_UpdateUserData>({
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
    },
    resolver: yupResolver(Schema_UpdateUserForm),
  });

  const onSubmit = async (formData: Type_UpdateUserData) => {
    const data: Type_UpdateUser = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
    };

    try {
      const {error, response} = await updateUser(
        session.user.id,
        data,
        session.backendTokens.accessToken,
      );

      if (error) {
        notifyError(error);
      }
      notifySuccess('Your information have been successfully updated.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
      </Grid>
      <DefaultButton
        type='submit'
        variant='contained'
        fullWidth
        sx={{mt: 3, py: 2}}>
        Save changes
      </DefaultButton>
    </form>
  );
};

export default UpdateUserForm;
