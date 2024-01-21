import { COLORS } from "@/assets/colors";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";

// TODO: créer l'ui pour la landing page not logged
const Landing = () => {
  return (
    <>
      <Container>
        <Typography> Colors palette</Typography>
        <Stack direction={"row"} gap={1}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.black,
              "&.MuiButtonBase-root:hover": {
                bgcolor: COLORS.hoverButton,
              },
            }}
          >
            Work in progress
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.burgundi,
              "&.MuiButtonBase-root:hover": {
                bgcolor: COLORS.hoverButton,
              },
            }}
          >
            Work in progress
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.pink,
              "&.MuiButtonBase-root:hover": {
                bgcolor: COLORS.hoverButton,
              },
            }}
          >
            Work in progress
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.grey,
              color: COLORS.black,
              "&.MuiButtonBase-root:hover": {
                bgcolor: COLORS.hoverButton,
              },
            }}
          >
            Work in progress
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.lightPink,
              color: COLORS.black,
              "&.MuiButtonBase-root:hover": {
                bgcolor: COLORS.hoverButton,
              },
            }}
          >
            Work in progress
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Landing;
