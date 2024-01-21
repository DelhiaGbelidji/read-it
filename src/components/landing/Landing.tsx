import { COLORS } from "@/assets/colors";
import { Container, Grid } from "@mui/material";

// TODO: créer l'ui pour la landing page not logged
const Landing = () => {
  return (
    <>
      <Container>
        Colors palette
        <Grid sx={{ backgroundColor: COLORS.black, color: COLORS.white }}>
          Work in progress
        </Grid>
        <Grid sx={{ backgroundColor: COLORS.burgundi, color: COLORS.white }}>
          Work in progress
        </Grid>
        <Grid sx={{ backgroundColor: COLORS.pink }}> Work in progress</Grid>
        <Grid sx={{ backgroundColor: COLORS.oldPink }}> Work in progress</Grid>
        <Grid sx={{ backgroundColor: COLORS.neutral }}> Work in progress</Grid>
      </Container>
    </>
  );
};

export default Landing;
