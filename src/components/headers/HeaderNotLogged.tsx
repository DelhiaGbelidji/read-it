'use client'
import {FormControlLabel, Grid, Stack} from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast'
import HandymanIcon from '@mui/icons-material/Handyman'
import {useRouter} from 'next/navigation'

import {ActionButton} from '../buttons/ActionButton'
import {Styled_IconButton} from '../buttons/IconButton.style'
import {Styled_Switch} from '../switch/Switch.style'
import {Type_Props_HeaderNotLogged} from '@/utils/types/public.type'

const HeaderNotLogged = ({toggleTheme}: Type_Props_HeaderNotLogged) => {
  const router = useRouter()

  return (
    <Grid sx={{p: 2}}>
      <Grid
        container
        direction='row'
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Grid item lg={6}>
          <Styled_IconButton
            size='large'
            edge='start'
            aria-label='menu'
            sx={{mr: 2}}
            onClick={() => router.push('/')}>
            <HandymanIcon />
          </Styled_IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={'flex-end'}
          container
          direction={'row'}
          alignItems={'center'}
          gap={2}>
          <FormControlLabel
            control={
              <Styled_Switch onChange={toggleTheme} name='toggleTheme' />
            }
            label={
              <Stack>
                <ContrastIcon />
              </Stack>
            }
            labelPlacement='start'
          />
          <ActionButton onClick={() => router.push('/auth')}>
            Login
          </ActionButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderNotLogged
