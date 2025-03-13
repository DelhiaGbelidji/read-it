import {AppBar, styled} from '@mui/material';

import {COLORS} from '@/utils/theme/';

export const Styled_AppBar = styled(AppBar)(({theme}) => ({
  '&.MuiAppBar-root': {
    backgroundColor: COLORS.lightGrey,
  },
}));
