'use client'
import * as React from 'react'
import {ImageLink} from './HeaderNotLogged'
import {Styled_IconButton} from '../buttons/IconButton.style'
import {Default_Button, Text_Button} from '../buttons/Buttons'
import {useRouter} from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'

import {
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import {Styled_AppBar} from './AppBar.style'
import ThemeToggle from '../toggleTheme/ToggleTheme'

const pages = ['Home', 'Product', 'About us']

export function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const router = useRouter()

  return (
    <Styled_AppBar position='static'>
      <Container maxWidth='xl'>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
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
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}>
                {page}
              </Text_Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <ThemeToggle />
            <Tooltip title='Login'>
              <Default_Button onClick={() => router.push('/auth')}>
                Login
              </Default_Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </Styled_AppBar>
  )
}
