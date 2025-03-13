import React, {ReactNode} from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {IconButton, styled, useMediaQuery} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {COLORS, theme} from '@/utils/theme';

type Type_ModalProps = {
  title: string;
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
};

const Styled_Dialog = styled(Dialog)(() => ({
  '& .MuiDialog-container': {
    margin: 'auto',
    '&.MuiPaper-root, .MuiDialog-paper': {
      width: '100%',
    },
  },
}));

const Modal = ({open, handleClose, children, title}: Type_ModalProps) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Styled_Dialog open={open} fullScreen={fullScreen}>
        <DialogTitle sx={{backgroundColor: COLORS.lightGrey}}>
          {title}
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
  );
};

export default Modal;
