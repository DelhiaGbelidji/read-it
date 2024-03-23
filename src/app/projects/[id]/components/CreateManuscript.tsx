'use client'
import {authOptions} from '@/app/api/auth/[...nextauth]/options'
import {createManuscript} from '@/app/api/manuscripts/services'
import {
  Type_CreateManuscript,
  Type_Manuscript,
} from '@/app/api/manuscripts/types'
import {DefaultButton} from '@/components/buttons/Buttons'
import {Styled_TextField} from '@/components/inputText/TextField.style'
import {notifyError, notifySuccess} from '@/utils/constants'
import {yupResolver} from '@hookform/resolvers/yup'
import {Grid} from '@mui/material'
import {getServerSession} from 'next-auth'
import {Dispatch, SetStateAction} from 'react'
import {Controller, useForm} from 'react-hook-form'
import * as Yup from 'yup'

type Type_Props_CreateManuscriptForm = {
  setOpenFormDialog: Dispatch<SetStateAction<boolean>>
  setData: Dispatch<SetStateAction<Type_Manuscript>>
  projectId: number
}

type Type_CreateManuscriptData = {
  title: string
  file_url: string
}
const Schema_Manuscript = Yup.object().shape({
  title: Yup.string().required('A title is required'),
  file_url: Yup.string().required('A file url is required'),
})

const CreateManuscriptForm = ({
  setOpenFormDialog,
  setData,
  projectId,
}: Type_Props_CreateManuscriptForm) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Type_CreateManuscriptData>({
    defaultValues: {
      title: '',
      file_url: '',
    },
    resolver: yupResolver(Schema_Manuscript),
  })

  const onSubmit = async (data: Type_CreateManuscriptData) => {
    const session = await getServerSession(authOptions)
    try {
      const manuscriptData: Type_CreateManuscript = {
        title: data.title,
        file_url: data.file_url,
        project_id: projectId,
      }

      if (!session) {
        return
      }

      const {error, response} = await createManuscript(
        manuscriptData,
        session.backendTokens.accessToken,
      )

      if (error) {
        notifyError(error)
        return
      }

      notifySuccess('Manuscript has been created successfully')
      setOpenFormDialog(false)
      setData(prevManuscript => ({...prevManuscript, response}))
    } catch (error) {
      console.error(error)
      notifyError('An unexpected error occurred')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Controller
              name='title'
              control={control}
              render={({field}) => (
                <Styled_TextField
                  autoComplete='off'
                  {...field}
                  label='Title'
                  variant='outlined'
                  fullWidth
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Controller
              name='file_url'
              control={control}
              render={({field}) => (
                <Styled_TextField
                  autoComplete='off'
                  {...field}
                  label='Url'
                  variant='outlined'
                  fullWidth
                  error={!!errors.file_url}
                  helperText={errors.file_url?.message}
                />
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
            <DefaultButton
              type='submit'
              variant='contained'
              sx={{mt: 3, py: 2}}>
              Create
            </DefaultButton>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default CreateManuscriptForm
