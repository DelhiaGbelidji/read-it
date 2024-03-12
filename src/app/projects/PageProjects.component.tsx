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
    setIsUpdateModalOpen(true) // Utilisez cet état pour ouvrir la modal de mise à jour
  }

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false)
  }

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: isMobile ? 16 : 20,
          textAlign: isMobile ? 'center' : 'left',
        }}>
        <Typography
          sx={{
            mt: spacing,
            mb: spacing,
            fontSize: isMobile ? 16 : 25,
            fontWeight: 'bold',
            textAlign: isMobile ? 'center' : 'left',
          }}>
          My Projects
        </Typography>
        <SearchBar onSearchChange={handleSearchChange} />
        <Styled_IconButton
          size='large'
          aria-haspopup='true'
          onClick={handleOpenFormDialog}
          color='inherit'>
          <AddCircleIcon />
        </Styled_IconButton>
      </Container>
      <Grid container spacing={{xs: 2, sm: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Rea_Card
              title={project.name}
              description={project.author}
              actions={[
                {label: 'Update', action: () => handleOpenUpdateModal(project)},
                {label: 'Delete', action: () => removeProject(project.id)},
              ]}
            />
          </Grid>
        ))}
        <Modal open={isUpdateModalOpen} handleClose={handleCloseUpdateModal}>
          <UpdateProjectForm
            session={session}
            setOpenFormDialog={setIsUpdateModalOpen}
            project={selectedProject as Type_Project}
            updateProjects={updateProjects}
          />
        </Modal>
      </Grid>
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
