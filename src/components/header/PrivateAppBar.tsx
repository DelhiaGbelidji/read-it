'use client'
import {Box, Menu, MenuItem, Stack, Toolbar, Typography} from '@mui/material'
import {Styled_AppBar} from './AppBar.style'
import AccountMenu from './AccountMenu'
import ThemeToggle from '../toggleTheme/ToggleTheme'
import {ImageLink} from './PublicAppBar'
import {useRouter} from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import {Styled_IconButton} from '../buttons/IconButton.style'
import {Text_Button} from '../buttons/Buttons'

const PrivateAppBar = ({name}: {name: string}) => {
  const router = useRouter()
  const pages = ['projects']

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null)
    router.push(`/${page === 'home' ? '/' : page}`)
  }
  return (
    <Styled_AppBar position='static'>
      <Toolbar disableGutters>
        <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
          <ImageLink src={'/assets/logo.png'} href='/' />
        </Box>
        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
          <Styled_IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'>
            <MenuIcon />
          </Styled_IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {xs: 'block', md: 'none'},
            }}>
            {pages.map(page => (
              <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                <Typography textAlign='center'>
                  {page.replaceAll('-', ' ').toUpperCase()}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{display: {xs: 'flex', md: 'none'}, mr: 1, flexGrow: 1}}>
          <ImageLink src={'/assets/logo.png'} href='/' />
        </Box>
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
          {pages.map(page => (
            <Text_Button
              key={page}
              onClick={() => handleCloseNavMenu(page)}
              sx={{my: 2, color: 'white', display: 'block'}}>
              {page.replaceAll('-', ' ')}
            </Text_Button>
          ))}
        </Box>
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}></Box>
        <Stack direction={'row'} sx={{flexGrow: 0}} spacing={2} marginRight={2}>
          <ThemeToggle />
          <AccountMenu name={name} />
        </Stack>
      </Toolbar>
    </Styled_AppBar>
  )
}

export default PrivateAppBar
