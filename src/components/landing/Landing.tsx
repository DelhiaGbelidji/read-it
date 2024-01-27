import { COLORS } from "@/assets/colors";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import paletteColor from "@/assets/read-it-palette-color.png";

// TODO: créer l'ui pour la landing page not logged
const Landing = () => {
  return (
    <>
      <Container>
        <Typography> Colors palette</Typography>
        <Grid>
          <Image
            alt="palette-color"
            src={paletteColor}
            width={750}
            height={500}
            placeholder="blur"
            blurDataURL={"@/assets/read-it-palette-color.png"}
          ></Image>
        </Grid>

        <Grid>
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
        </Grid>
      </Container>
    </>
  );
};

export default Landing;
