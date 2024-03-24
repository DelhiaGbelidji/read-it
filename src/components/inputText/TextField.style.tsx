import {COLORS} from '@/utils/theme';
import {TextField, styled} from '@mui/material';

export const Styled_TextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: COLORS.pink,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.pink,
    },
  },
  '& .MuiInputLabel-root': {
    color: COLORS.grey,
    '&.Mui-focused': {
      color: COLORS.pink,
    },
  },
}));
