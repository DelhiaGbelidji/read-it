'use client'
import React from 'react'
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Image from 'next/image'
import {DefaultButton, ClearButton} from '@/components/buttons/Buttons'
import BooksCarousel from '../components/landing/Carousel'
import CustomSloganTypography from '@/components/landing/slogan'
import {COLORS} from '@/utils/theme'
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:600px)')
  const spacing = isMobile ? 2 : 4

  return (
    <Container sx={{mt: spacing, mb: spacing}}>
      <Grid
        container
        spacing={spacing}
        alignItems='center'
        justifyContent='center'>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: 'relative',
            height: {xs: 350, sm: 450},
            width: '100%',
          }}>
          <Box
            sx={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
            <Image
              src={'/assets/landing.jpg'}
              alt='Landing'
              layout='fill'
              objectFit='cover'
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <CustomSloganTypography />
          <Typography
            fontSize={isMobile ? 16 : 20}
            textAlign={isMobile ? 'center' : 'left'}
            sx={{mt: spacing, mb: spacing}}>
            At{' '}
            <span style={{fontWeight: 'bold', color: '#F7195C'}}>READ-it</span>,
            we hold the conviction that words possess the power to inspire,
            forge connections, and evoke emotions. Our mission is to establish a
            conduit between avid readers and gifted authors. We transcend the
            conventional boundaries of a manuscript publishing platform.
            Instead, we offer a realm where dreams are realized and stories
            ascend to new heights.
          </Typography>
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={2}
            justifyContent='center'>
            <DefaultButton onClick={() => router.push('/about-us')}>
              About us
            </DefaultButton>
            <ClearButton onClick={() => router.push('/auth')}>
              Join us
            </ClearButton>
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: spacing,
          mb: spacing,
        }}>
        <Box sx={{flexGrow: 1, height: '1px', bgcolor: `${COLORS.grey500}`}} />
        <Typography sx={{mx: 2, color: `${COLORS.neutral700}`, px: 1}}>
          Book recommendation
        </Typography>
        <Box sx={{flexGrow: 1, height: '1px', bgcolor: `${COLORS.grey500}`}} />
      </Box>
      <BooksCarousel />
    </Container>
  )
}
