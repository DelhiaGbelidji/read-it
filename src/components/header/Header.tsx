"useClient";
import { FormControlLabel, Grid, IconButton, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

import { ActionButton } from "../buttons/ActionButton";

export default function Header({ switchTheme }: { switchTheme: any }) {
  const router = useRouter();
  return (
    <Grid className="public-header" sx={{ p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid lg={6}>
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

        {/* <FormControlLabel
            control={
              <Switch
                onChange={switchTheme}
                name="switchTheme"
                color="primary"
              />
            }
            label="Change theme"
          /> */}
        <ActionButton
          variant="contained"
          onClick={() => router.push("/authentification/signup")}
        >
          Sign up
        </ActionButton>
      </Grid>
    </Grid>
  );
}
