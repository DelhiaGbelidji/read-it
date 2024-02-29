'use client'
import {Box, Container, Stack, Toolbar} from '@mui/material'
import {Styled_AppBar} from './AppBar.style'
import AccountMenu from './AccountMenu'
import ThemeToggle from '../toggleTheme/ToggleTheme'
import {ImageLink} from './PublicAppBar'

const PrivateAppBar = ({name}: {name: string}) => {
  return (
    <Styled_AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
            <ImageLink src={'/assets/logo.png'} href='/' />
          </Box>

          <Box sx={{display: {xs: 'flex', md: 'none'}, mr: 1, flexGrow: 1}}>
            <ImageLink src={'/assets/logo.png'} href='/' />
          </Box>

          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}></Box>
          <Stack direction={'row'} sx={{flexGrow: 0}} spacing={2}>
            <ThemeToggle />
            <AccountMenu name={name} />
          </Stack>
        </Toolbar>
      </Container>
    </Styled_AppBar>
  )
}

export default PrivateAppBar
