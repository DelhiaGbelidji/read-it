import {Dispatch, SetStateAction} from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {Grid} from '@mui/material';
import {Session} from 'next-auth';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {formatterProject} from '@/app/api/projects/formatters';
import {updateProject} from '@/app/api/projects/route';
import {Type_Project, Type_UpdateProject} from '@/app/api/projects/types';
import {DefaultButton} from '@/components/buttons/Buttons';
import {Styled_TextField} from '@/components/inputText/TextField.style';
import {notifyError, notifySuccess} from '@/utils/constants';

type Type_Props_UpdateProjectForm = {
  session: Session;
  setOpenFormDialog: Dispatch<SetStateAction<boolean>>;
  project: Type_Project;
  updateProjects: (project: Type_Project) => void;
};

type Type_UpdateProjectData = {
  name?: string;
};
const Schema_UpdateProject = Yup.object().shape({
  name: Yup.string().optional(),
});

const UpdateProjectForm = ({
  session,
  setOpenFormDialog,
  project,
  updateProjects,
}: Type_Props_UpdateProjectForm) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Type_UpdateProjectData>({
    defaultValues: {
      name: project.name,
    },
    resolver: yupResolver(Schema_UpdateProject),
  });

  const onSubmit = async (data: Type_UpdateProjectData) => {
    try {
      const projectData: Type_UpdateProject = {
        name: data.name,
      };
      const {error, response} = await updateProject(
        projectData,
        project.id,
        session.backendTokens.accessToken,
      );

      if (error) {
        notifyError(error);
        return;
      }

      notifySuccess('Project has been updated successfully');
      updateProjects(formatterProject(response));
      setOpenFormDialog(false);
    } catch (error) {
      console.error(error);
      notifyError('An unexpected error occurred');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Controller
              name='name'
              control={control}
              render={({field}) => (
                <Styled_TextField
                  autoComplete='off'
                  {...field}
                  label='Project name'
                  variant='outlined'
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <DefaultButton type='submit' variant='contained' sx={{mt: 3, py: 2}}>
            Update
          </DefaultButton>
        </Grid>
      </form>
    </>
  );
};

export default UpdateProjectForm;
