'use client'
import {Box, Grid} from '@mui/material'
import {Type_Props_HeaderNotLogged} from '@/utils/types/public.type'
import {COLORS} from '@/utils/theme'
import Image from 'next/image'

export const ImageLink = ({src, href}: {src: string; href: string}) => {
  return (
    <Box alignItems={'center'}>
      <a href={href}>
        <Image src={src} alt='Logo' width={140} height={50} />
      </a>
    </Box>
  )
}

const HeaderNotLogged = ({toggleTheme}: Type_Props_HeaderNotLogged) => {
  return (
    <Grid sx={{p: 2, backgroundColor: `${COLORS.lightGrey}`}}>
      <Grid
        container
        direction='row'
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Grid>
          <ImageLink src={'/assets/logo.png'} href='/' />
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={'flex-end'}
          container
          direction={'row'}
          alignItems={'center'}
          gap={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderNotLogged
