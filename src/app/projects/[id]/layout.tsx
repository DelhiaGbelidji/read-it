'use client';
import {Grid, Typography, useMediaQuery} from '@mui/material';

export default function LayoutProject({children}: {children: React.ReactNode}) {
  //RESPONSIVE
  const isMobile = useMediaQuery('(max-width:600px)');
  const spacing = isMobile ? 2 : 4;

  return (
    <>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        width={'100%'}
        padding={3}>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Typography
            variant='h6'
            sx={{
              mt: spacing,
              mb: spacing,
              fontWeight: 'bold',
            }}>
            Dashboard{' '}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={3}
          sx={{display: 'flex', justifyContent: 'flex-end'}}></Grid>
      </Grid>
      <Grid container spacing={4} justifyContent='center' width={'100%'} m={0}>
        {children}
      </Grid>
    </>
  );
}
