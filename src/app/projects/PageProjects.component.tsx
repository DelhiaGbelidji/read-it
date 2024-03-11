import {Styled_IconButton} from '@/components/buttons/IconButton.style'
import SearchBar from '@/components/searchbar/SearchBar'
import {useMediaQuery, Container, Typography, Card} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {Type_Project} from '../api/projects/types'
import Rea_Card from '@/components/card/Card'
import {useState} from 'react'

type Type_Props_PageProjectComponent = {
  projects: Type_Project[]
  error: string | null
}

const PageProjectComponent = ({
  projects,
  error,
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

  return (
    <>
      {error ? (
        <div>An error occurred: {error}</div>
      ) : (
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
              onClick={() => {}}
              color='inherit'>
              <AddCircleIcon />
            </Styled_IconButton>
          </Container>
          <Container sx={{display: 'flex', gap: spacing, mt: '50px'}}>
            {projects.map((project, index) => (
              <Rea_Card
                key={index}
                title={project.name}
                description={project.author}
              />
            ))}
          </Container>
        </>
      )}
    </>
  )
}
export default PageProjectComponent
