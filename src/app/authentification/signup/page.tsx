import { Box } from "@mui/material";
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
    <Stack fontFamily="roboto" fontSize={15} direction="column" spacing={4} alignItems="center" sx={{fontWeight: 700}}>
        <div>
          <h1>
            Join our adventure.<br/>
            Sign up now, <br/>
            and embark on your journey !
          </h1>
        </div>
      <SignUpForm />
    </Stack>
  </Box>
  );
};

export default SignUp;
