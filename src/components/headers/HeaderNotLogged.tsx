'use client'
import {FormControlLabel, Grid, Stack} from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast'
import {useRouter} from 'next/navigation'

import {ActionButton} from '../buttons/ActionButton'
import {Styled_Switch} from '../switch/Switch.style'
import {Type_Props_HeaderNotLogged} from '@/utils/types/public.type'
import {COLORS} from '@/utils/colors'
import Image from 'next/image'
import {Styled_IconButton} from '../buttons/IconButton.style'

const ImageLink = ({src, href}: {src: string; href: string}) => {
  return (
    <a href={href}>
      <Image src={src} alt='Logo' width={140} height={50} />
    </a>
  )
}

const HeaderNotLogged = ({toggleTheme}: Type_Props_HeaderNotLogged) => {
  const router = useRouter()
  return (
    <Grid sx={{p: 2, backgroundColor: `${COLORS.lightGrey}`}}>
      <Grid
        container
        direction='row'
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Grid position='relative'>
          <ImageLink src={'/assets/logo.png'} href='/' />
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={'flex-end'}
          container
          direction={'row'}
          alignItems={'center'}
          gap={2}>
          <Styled_IconButton
            size='large'
            edge='start'
            aria-label='menu'
            sx={{mr: 2}}
            onClick={toggleTheme}>
            <ContrastIcon />
          </Styled_IconButton>
          <ActionButton onClick={() => router.push('/auth')}>
            Login
          </ActionButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderNotLogged
