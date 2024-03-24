import {COLORS} from '@/utils/theme';
import {Stack, CircularProgress, Typography} from '@mui/material';

const Loading = () => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={1}
      color={COLORS.pink}>
      <CircularProgress color='inherit' />
      <Typography variant='subtitle2'>Loading...</Typography>
    </Stack>
  );
};
export default Loading;
