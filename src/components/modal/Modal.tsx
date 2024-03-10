import React, {ReactNode} from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {DefaultButton, ClearButton} from '../buttons/Buttons'
import {useMediaQuery} from '@mui/material'
import {theme} from '@/utils/theme'

type Type_ModalProps = {
  open: boolean
  handleClose: () => void
  children: ReactNode
}

const Modal = ({open, handleClose, children}: Type_ModalProps) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>New project</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <DefaultButton onClick={handleClose}>Cancel</DefaultButton>
          <ClearButton type='submit'>Create</ClearButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Modal
