import {ClearButton} from '@/components/buttons/Buttons'
import ImageUploadArea from '@/components/imageUpload/ImageUpload'
import PdfUploadArea from '@/components/pdfUpload/PdfUpload'
import {yupResolver} from '@hookform/resolvers/yup'
import {Grid, TextField} from '@mui/material'
import {useState} from 'react'
import {Controller, useForm} from 'react-hook-form'

import * as Yup from 'yup'
type Type_CreateProjectData = {
  name: string
}
const Schema_Project = Yup.object().shape({
  name: Yup.string().required('Project name is required'),
})

const CreateProjectForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [pdfFile, setPDFFile] = useState<File | null>(null)

  const handleImageSelect = (file: File) => {
    setImageFile(file)
  }
  const handlePDFSelect = (file: File) => {
    setPDFFile(file)
  }

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Type_CreateProjectData>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(Schema_Project),
  })

  const onSubmit = () => {
    // if (imageFile) {
    //   formData.append('image', imageFile)
    // } else {
    //   // Fetch and append the default image as a blob
    //   fetch('/src/assets/logo.png')
    //     .then(response => response.blob())
    //     .then(blob => {
    //       const defaultImageFile = new File([blob], 'default.jpg', {
    //         type: 'image/jpeg',
    //       })
    //       formData.append('image', defaultImageFile)
    //     })
    //     .catch(error => console.error('Error fetching default image:', error))
    // }
    // if (pdfFile) {
    //   formData.append('pdf', pdfFile)
    // }
    // // Ici tu peux gerer la connexion avec le back ex:
    // // fetch('your-endpoint', {
    // //     method: 'POST',
    // //     body: formData,
    // // });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} justifyContent='center'>
          <Grid
            item
            xs={8}
            display='flex'
            flexDirection='column'
            alignItems='center'>
            <Controller
              name='name'
              control={control}
              render={({field}) => (
                <TextField
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
            {/* <Grid item xs={8}>
              <ImageUploadArea onImageSelect={handleImageSelect} />
            </Grid>
            <Grid item xs={8}>
              <PdfUploadArea onFileSelect={handlePDFSelect} />
            </Grid> */}
          </Grid>
        </Grid>

        <ClearButton
          type='submit'
          variant='contained'
          fullWidth
          sx={{mt: 3, py: 2}}>
          Create
        </ClearButton>
      </form>
    </>
  )
}

export default CreateProjectForm
