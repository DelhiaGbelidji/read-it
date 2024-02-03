import { Box, Typography } from "@mui/material";
import SignUpForm from "@/components/auth/SignUpForm";
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/500.css';


const SignUp = () => {
  return (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="90vh"
  >
    <Stack 
      direction="column" 
      spacing={4} 
      alignItems="center" 
    >
          <Typography
            fontSize={30}
            sx={{fontWeight: 700}} 
          >
            Join our adventure.<br/>
            Sign up now, <br/>
            and embark on your journey !
          </Typography>
      <SignUpForm />
    </Stack>
  </Box>
  );
};

export default SignUp;
