import {TabList, TabPanel} from '@mui/lab';
import {styled} from '@mui/material';

import {COLORS} from '@/utils/theme';

export const Styled_TabList = styled(TabList)(() => ({
  '& .MuiTab-root': {
    '&.Mui-selected': {
      color: COLORS.black,
      backgroundColor: COLORS.white,
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: COLORS.pink,
  },
}));

export const Styled_TabPanel = styled(TabPanel)(() => ({
  '&.MuiTabPanel-root': {
    maxWidth: '500px',
    margin: 'auto',
  },
}));
