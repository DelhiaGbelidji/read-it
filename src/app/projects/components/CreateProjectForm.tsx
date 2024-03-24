import {formatterProject} from '@/app/api/projects/formatters';
import {createProject} from '@/app/api/projects/route';
import {Type_CreateProject, Type_Project} from '@/app/api/projects/types';
import {DefaultButton} from '@/components/buttons/Buttons';
import {Styled_TextField} from '@/components/inputText/TextField.style';
import {notifyError, notifySuccess} from '@/utils/constants';
import {yupResolver} from '@hookform/resolvers/yup';
import {Grid} from '@mui/material';
import {Session} from 'next-auth';
import {Dispatch, SetStateAction} from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';

type Type_Props_CreateProjectForm = {
  session: Session;
  setOpenFormDialog: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<Type_Project[]>>;
};

type Type_CreateProjectData = {
  name: string;
};
const Schema_Project = Yup.object().shape({
  name: Yup.string().required('Project name is required'),
});

const CreateProjectForm = ({
  session,
  setOpenFormDialog,
  setData,
}: Type_Props_CreateProjectForm) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Type_CreateProjectData>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(Schema_Project),
  });

  const onSubmit = async (data: Type_CreateProjectData) => {
    try {
      const projectData: Type_CreateProject = {name: data.name};
      const {error, response} = await createProject(
        projectData,
        session.backendTokens.accessToken,
      );

      if (error) {
        notifyError(error);
        return;
      }

      notifySuccess('Project has been created successfully');
      setOpenFormDialog(false);
      setData(prevProjects => [...prevProjects, formatterProject(response)]);
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
            Create
          </DefaultButton>
        </Grid>
      </form>
    </>
  );
};

export default CreateProjectForm;
