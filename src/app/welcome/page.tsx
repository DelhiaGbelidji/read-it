import {Paper, Typography} from '@mui/material'

const WelcomePage = () => {
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
        We sent you a link to verify your email address. Please confirm your
        email so we can complete registration.
      </Typography>
    </Paper>
  )
}
export default WelcomePage
