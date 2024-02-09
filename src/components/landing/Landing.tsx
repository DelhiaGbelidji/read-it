import { Button, Container, Grid, Stack, Typography,  } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
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
            fontWeight={700}
            >
              Reading embraces all differences ! 
            </Typography>
            <Typography 
            fontSize={20}
            display="block"
            sx={{ mt: 10 }}
            >
              Chez <span style={{fontWeight: 'bold', color: '#F7195C' }}>READ-it</span>, nous croyons au pouvoir des mots pour inspirer, connecter et émouvoir. Notre mission est de créer une passerelle entre les amoureux de la lecture et les auteurs talentueux. Nous sommes bien plus qu'une simple plateforme de publication de manuscrits. Nous sommes un espace où les rêves prennent vie et où les histoires prennent leur envol.
            </Typography>
            <Stack 
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            sx={{ mt: 8 }}
            >
              <ActionButton>About us</ActionButton>
              <Link href="" passHref>
              <ActionButtonOutlined>Join us</ActionButtonOutlined>
              </Link>  
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Landing;
