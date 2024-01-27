import {Button, styled} from '@mui/material'

import {COLORS} from '@/assets/colors'

export const ActionButton = styled(Button)(() => ({
  fontSize: '14px',
  lineHeight: '16px',
  backgroundColor: COLORS.pink,
  color: COLORS.white,
  borderRadius: '50px',
  boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  '&:hover:not(.Mui-disabled), &.Mui-focused': {
    backgroundColor: COLORS.hoverButton,
    color: COLORS.black,
    boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  },
  '&.Mui-disabled': {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
}))

export const ActionButtonOutlined = styled(Button)(() => ({
  fontSize: '14px',
  lineHeight: '16px',
  backgroundColor: COLORS.black,
  color: COLORS.white,
  border: `1px solid ${COLORS.black}`,
  borderRadius: '50px',
  boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  '&:hover:not(.Mui-disabled), &.Mui-focused': {
    backgroundColor: COLORS.outlinedHoverButton,
    color: COLORS.black,
    boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
    border: `1px solid ${COLORS.white}`,
  },
  '&.Mui-disabled': {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
}))
