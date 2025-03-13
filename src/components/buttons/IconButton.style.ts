import {IconButton, styled} from '@mui/material';

import {COLORS} from '@/utils/theme/';

export const Styled_IconButton = styled(IconButton)(() => ({
  fontSize: '14px',
  lineHeight: '16px',
  backgroundColor: COLORS.white,
  color: COLORS.black,
  boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
  '&:hover:not(.Mui-disabled), &.Mui-focused': {
    boxShadow: '0px 2px 4px rgba(25, 49, 84, 0.15)',
    color: COLORS.pink,
  },
  '&.Mui-disabled': {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
}));
