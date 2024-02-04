import {Type_Props_ConfirmEmail} from '@/types'
import {Paper, Typography} from '@mui/material'

const ConfirmEmail = ({email}: Type_Props_ConfirmEmail) => {
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
        We sent you a link to verify your email address at {email.toString()}.
        Please confirm your email so we can complete registration.
      </Typography>
    </Paper>
  )
}

export default ConfirmEmail
