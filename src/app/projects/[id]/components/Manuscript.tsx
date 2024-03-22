'use client'
import {Type_Manuscript} from '@/app/api/manuscripts/types'
import {Type_Project} from '@/app/api/projects/types'
import {useState} from 'react'
import CreateManuscriptForm from './CreateManuscript'
import Modal from '@/components/modal/Modal'
import {Grid, Typography, useMediaQuery} from '@mui/material'
import {Styled_IconButton} from '@/components/buttons/IconButton.style'
import AddCircleIcon from '@mui/icons-material/AddCircle'

type Type_Props_Manuscript = {
  project: Type_Project
}

const Manuscript = ({project}: Type_Props_Manuscript) => {
  const [data, setData] = useState<Type_Manuscript>({
    id: 0,
    title: '',
    file_url: '',
    project_id: project?.id,
  })

  //RESPONSIVE
  const isMobile = useMediaQuery('(max-width:600px)')
  const spacing = isMobile ? 2 : 4

  //MODAL
  const [openFormDialog, setOpenFormDialog] = useState(false)

  const handleOpenFormDialog = () => {
    setOpenFormDialog(true)
  }

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)
  }

  return (
    <>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        width={'100%'}
        padding={3}>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Typography
            sx={{
              mt: spacing,
              mb: spacing,
              fontWeight: 'bold',
            }}>
            {project?.name}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={3}
          sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Styled_IconButton onClick={handleOpenFormDialog} color='inherit'>
            <AddCircleIcon />
          </Styled_IconButton>
        </Grid>
      </Grid>
      <iframe
        src='/assets/Lorem_ipsum.pdf'
        style={{
          width: '700px',
          height: '70vH',
        }}></iframe>
      <Modal
        title={'New manuscript'}
        open={openFormDialog}
        handleClose={handleCloseFormDialog}>
        <CreateManuscriptForm
          setOpenFormDialog={setOpenFormDialog}
          setData={setData}
          projectId={project?.id}
        />
      </Modal>
    </>
  )
}
export default Manuscript
