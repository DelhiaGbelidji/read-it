'use client'
import {Dispatch, SetStateAction, useState} from 'react'
import {Styled_IconButton} from '@/components/buttons/IconButton.style'
import SearchBar from '@/components/searchbar/SearchBar'
import {useMediaQuery, Container, Typography, Grid} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {Type_Project} from '../api/projects/types'
import Rea_Card from '@/components/card/Card'
import Modal from '@/components/modal/Modal'
import CreateProjectForm from './components/CreateProjectForm'
import {Session} from 'next-auth'
import UpdateProjectForm from './components/UpdateProjectForm'
import {useRouter} from 'next/navigation'

type Type_Props_PageProjectComponent = {
  projects: Type_Project[]
  session: Session
  setData: Dispatch<SetStateAction<Type_Project[]>>
  updateProjects: (project: Type_Project) => void
  removeProject: (id: number) => void
}

const PageProjectsComponent = ({
  projects,
  session,
  setData,
  updateProjects,
  removeProject,
}: Type_Props_PageProjectComponent) => {
  const router = useRouter()
  //SEARCH
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

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

  const [selectedProject, setSelectedProject] = useState<Type_Project | null>(
    null,
  )

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

  const handleOpenUpdateModal = (project: Type_Project) => {
    setSelectedProject(project)
    setIsUpdateModalOpen(true)
  }

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false)
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
            variant='h6'
            sx={{
              mt: spacing,
              mb: spacing,
              fontWeight: 'bold',
            }}>
            My Projects
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={5}
          sx={{display: 'flex', justifyContent: 'center'}}>
          <SearchBar onSearchChange={handleSearchChange} />
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
      <Grid container spacing={4} justifyContent='center' width={'100%'} m={0}>
        {filteredProjects.map((project, index) => (
          <Grid item key={index}>
            <Rea_Card
              onClick={() => router.push(`/projects/${project.id}`)}
              title={project.name}
              description={project.author}
              actions={[
                {
                  label: 'Update',
                  action: () => handleOpenUpdateModal(project),
                },
                {label: 'Delete', action: () => removeProject(project.id)},
              ]}
            />
          </Grid>
        ))}
      </Grid>

      <Modal open={isUpdateModalOpen} handleClose={handleCloseUpdateModal}>
        <UpdateProjectForm
          session={session}
          setOpenFormDialog={setIsUpdateModalOpen}
          project={selectedProject as Type_Project}
          updateProjects={updateProjects}
        />
      </Modal>
      <Modal open={openFormDialog} handleClose={handleCloseFormDialog}>
        <CreateProjectForm
          session={session}
          setOpenFormDialog={setOpenFormDialog}
          setData={setData}
        />
      </Modal>
    </>
  )
}
export default PageProjectsComponent
