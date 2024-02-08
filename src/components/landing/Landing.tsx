import { Button, Container, Grid, Stack, Typography,  } from "@mui/material";
import Image from "next/image";
import {ActionButton, ActionButtonOutlined} from '../buttons/ActionButton';


// TODO: créer l'ui pour la landing page not logged
const Landing = () => {
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Grid 
        display="flex"
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        height={900}
        >
          <Grid
          position="relative"
          width={500}
          height={700}
          >
            <Image
            src={"/assets/livres-scaled.jpg"}
            alt="Books"
            layout="fill"
            objectFit="cover"
            />
          </Grid>
          <Grid
          width={500}
          >
            <Typography 
            fontSize={48}
            >
              Reading embraces all differences ! 
            </Typography>
            <Typography 
            fontSize={20}
            sx={{ mt: 10 }}
            >
              Chez READ-it, nous croyons au pouvoir des mots pour inspirer, connecter et émouvoir. Notre mission est de créer une passerelle entre les amoureux de la lecture et les auteurs talentueux. Nous sommes bien plus qu'une simple plateforme de publication de manuscrits. Nous sommes un espace où les rêves prennent vie et où les histoires prennent leur envol.
            </Typography>
            <Stack 
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            sx={{ mt: 8 }}
            >
              <ActionButton />
              <ActionButtonOutlined />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Landing;
