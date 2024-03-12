import React, {ReactNode} from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import CloseIcon from '@mui/icons-material/Close'
import {IconButton, styled, useMediaQuery} from '@mui/material'
import {COLORS, theme} from '@/utils/theme'

type Type_ModalProps = {
  open: boolean
  handleClose: () => void
  children: ReactNode
}

const Styled_Dialog = styled(Dialog)(() => ({
  '& .MuiDialog-container': {
    margin: 'auto',
    '&.MuiPaper-root, .MuiDialog-paper': {
      width: '100%',
    },
  },
}))

const Modal = ({open, handleClose, children}: Type_ModalProps) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Styled_Dialog open={open} fullScreen={fullScreen}>
        <DialogTitle sx={{backgroundColor: COLORS.lightGrey}}>
          New project{' '}
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: COLORS.black,
          }}>
          <CloseIcon />
        </IconButton>
        <DialogContent>{children}</DialogContent>
      </Styled_Dialog>
    </>
  )
}

export default Modal
