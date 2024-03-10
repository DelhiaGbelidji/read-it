'use client'
import React from 'react'
import {useState} from 'react'
import {Container, Typography, useMediaQuery} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchBar from '../../components/searchbar/SearchBar'
import Modal from '../../components/modal/Modal'
import Card from '@/components/card/Card'
import {Styled_IconButton} from '@/components/buttons/IconButton.style'
import CreateProjectForm from './components/CreateProjectForm'

const ProjectsPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const spacing = isMobile ? 2 : 6
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState([
    {title: 'Livre 1'},
    {title: 'Bouquin 2'},
    {title: 'Papier 3'},
  ])

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  const [openFormDialog, setOpenFormDialog] = useState(false)

  const handleOpenFormDialog = () => {
    setOpenFormDialog(true)
  }

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)
  }

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: isMobile ? 16 : 20,
          textAlign: isMobile ? 'center' : 'left',
          mt: spacing,
          mb: spacing,
        }}>
        <Typography
          sx={{
            fontSize: isMobile ? 16 : 25,
            fontWeight: 'bold',
            textAlign: isMobile ? 'center' : 'left',
          }}>
          My Projects
        </Typography>
        <SearchBar onSearchChange={handleSearchChange} />
        <Container
          style={{
            width: '135px',
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Styled_IconButton
            size='large'
            aria-haspopup='true'
            onClick={handleOpenFormDialog}
            color='inherit'>
            <AddCircleIcon />
          </Styled_IconButton>
        </Container>
      </Container>
      <Container
        sx={{display: 'flex', mt: '50px', justifyContent: 'space-between'}}>
        {filteredProjects.map((project, index) => (
          <Card key={index} title={project.title} />
        ))}
      </Container>
      <Modal open={openFormDialog} handleClose={handleCloseFormDialog}>
        <CreateProjectForm />
      </Modal>
    </>
  )
}

export default ProjectsPage
