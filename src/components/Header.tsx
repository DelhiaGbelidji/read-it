"useClient";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button variant="contained" href={"/authentification/signup"}>
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
