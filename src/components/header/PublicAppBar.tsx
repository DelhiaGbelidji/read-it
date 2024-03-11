'use client'
import * as React from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

import {
  Box,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import {Styled_IconButton} from '../buttons/IconButton.style'
import {DefaultButton, Text_Button} from '../buttons/Buttons'
import {Styled_AppBar} from './AppBar.style'
import ThemeToggle from '../toggleTheme/ToggleTheme'

export const ImageLink = ({src, href}: {src: string; href: string}) => {
  return (
    <Box alignItems={'center'}>
      <a href={href}>
        <Image src={src} alt='Logo' width={140} height={50} />
      </a>
    </Box>
  )
}

export const PublicAppBar = () => {
  const router = useRouter()
  const pages = ['home', 'product', 'about-us']

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

        <Stack direction={'row'} sx={{flexGrow: 0}} spacing={2}>
          <ThemeToggle />

          <DefaultButton>
            <Link
              href={'/auth'}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}>
              Login
            </Link>
          </DefaultButton>
        </Stack>
      </Toolbar>
    </Styled_AppBar>
  )
}
