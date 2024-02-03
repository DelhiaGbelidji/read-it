import { Box, Typography } from "@mui/material";
import LoginForm from "@/components/auth/LoginForm";
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/500.css';



const Login = () => {
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
            fontSize={33}
            sx={{fontWeight: 700}} 
          >
            Good to See You Again !<br />
            Let’s Continue the Journey.
          </Typography>
        <LoginForm />
      </Stack>
    </Box>
  );
};

export default Login;
