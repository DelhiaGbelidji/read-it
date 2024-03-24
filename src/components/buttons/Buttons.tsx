import {Button, styled} from '@mui/material';

import {COLORS} from '@/utils/theme/';

export const DefaultButton = styled(Button)(() => ({
  fontSize: '14px',
  lineHeight: '16px',
  backgroundColor: COLORS.black,
  color: COLORS.white,
  borderRadius: '50px',
  boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  '&:hover:not(.Mui-disabled), &.Mui-focused': {
    backgroundColor: COLORS.pink,
    boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  },
  '&.Mui-disabled': {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
  '&.MuiButtonBase-root': {
    textTransform: 'none',
  },
}));

export const ClearButton = styled(Button)(() => ({
  fontSize: '14px',
  lineHeight: '16px',
  backgroundColor: COLORS.clear,
  color: COLORS.black,
  borderRadius: '50px',
  boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  '&:hover:not(.Mui-disabled), &.Mui-focused': {
    backgroundColor: COLORS.pink,
    boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  },
  '&.Mui-disabled': {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
  '&.MuiButtonBase-root': {
    textTransform: 'none',
  },
}));

export const TextButton = styled(Button)(() => ({
  '&.MuiButtonBase-root, .MuiButton-text': {
    color: COLORS.black,
  },
}));

export const WarningButton = styled(Button)(() => ({
  fontSize: '14px',
  lineHeight: '16px',
  backgroundColor: COLORS.clear,
  color: COLORS.black,
  borderRadius: '50px',
  boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  '&:hover:not(.Mui-disabled), &.Mui-focused': {
    backgroundColor: COLORS.red500,
    color: COLORS.white,
    boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  },
  '&.Mui-disabled': {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
  '&.MuiButtonBase-root': {
    textTransform: 'none',
  },
}));
