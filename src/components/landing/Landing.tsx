import { Box, Container, Grid, Stack, Typography,  } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import {ActionButton, ActionButtonOutlined} from '../buttons/ActionButton';
import BookCard from "../bookCard/BookCard";

// TODO: créer l'ui pour la landing page not logged
const Landing = () => {
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Grid 
        container
        display="flex"
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        height={600}
        >
          <Grid
          position="relative"
          width={500}
          height={550}
          >
            <Image
            src={"/assets/livres-scaled.jpg"}
            alt="Books"
            width={500}
            height={550}
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
            sx={{ mt: 5 }}
            >
              At <span style={{fontWeight: 'bold', color: '#F7195C' }}>READ-it</span>, we hold the conviction that words possess the power to inspire, forge connections, and evoke emotions. Our mission is to establish a conduit between avid readers and gifted authors. We transcend the conventional boundaries of a manuscript publishing platform. Instead, we offer a realm where dreams are realized and stories ascend to new heights.
            </Typography>
            <Stack 
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={1.5}
            sx={{ mt: 8 }}
            >
              <ActionButton>About us</ActionButton>
              <Link href="" passHref>
              <ActionButtonOutlined>Join us</ActionButtonOutlined>
              </Link>  
            </Stack>
          </Grid>
        </Grid>
        <Grid>
        <Box
          sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: 5,
          }}
        >
          <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'grey.500' }} />
            <Typography
              sx={{
              mx: 2,
              bgcolor: 'background.paper',
              px: 1,
              }}
            >
              Book recommendation
            </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'grey.500' }} />
        </Box>
      </Grid>
      <Grid>
        <BookCard />
      </Grid>
    </Container>
  </>
  );
};

export default Landing;
