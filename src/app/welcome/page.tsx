import {useRouter} from 'next/router'
import {Typography, Paper} from '@mui/material'

const Welcome = () => {
  const router = useRouter()
  const {email} = router.query

  return (
    <Paper
      elevation={3}
      square={false}
      sx={{
        padding: '16px',
      }}>
      <Typography gutterBottom variant='h5' component='div'>
        Email sent
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        We sent you a link to verify your email address at {email}. Please
        confirm your email so we can complete registration.
      </Typography>
    </Paper>
  )
}

export default Welcome
