"use client";
import { FormControlLabel, Grid, IconButton, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

import { ActionButton } from "../buttons/ActionButton";

export default function Header({ switchTheme }: { switchTheme: () => void }) {
  const router = useRouter();
  return (
    <Grid className="public-header" sx={{ p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item lg={6}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#FDDFD9" }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={"flex-end"}
          container
          direction={"row"}
          alignItems={"center"}
        >
          <FormControlLabel
            control={
              <Switch
                onChange={switchTheme}
                name="switchTheme"
                color="primary"
              />
            }
            label="Change theme"
          />
          <ActionButton
            variant="contained"
            onClick={() => router.push("/authentification/login")}
          >
            Login
          </ActionButton>
          <ActionButton
            variant="contained"
            onClick={() => router.push("/authentification/signup")}
          >
            Sign up
          </ActionButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
