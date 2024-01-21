"use client";
import { FormControlLabel, Grid } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import { usePathname, useRouter } from "next/navigation";

import { ActionButton, ActionButtonOutlined } from "../buttons/ActionButton";
import { Styled_IconButton } from "../buttons/IconButton.style";
import { Styled_Switch } from "../switch/Switch.style";
import { Type_Props_HeaderNotLogged } from "@/types/public.type";

const HeaderNotLogged = ({ switchTheme }: Type_Props_HeaderNotLogged) => {
  const router = useRouter();
  const pathname = usePathname();

  function displayButtons() {
    if (pathname === "/authentification/login") {
      return (
        <ActionButton
          variant="contained"
          onClick={() => router.push("/authentification/signup")}
        >
          Sign up
        </ActionButton>
      );
    }
    if (pathname === "/authentification/signup") {
      return (
        <ActionButtonOutlined
          variant="outlined"
          onClick={() => router.push("/authentification/login")}
        >
          Login
        </ActionButtonOutlined>
      );
    }

    return (
      <>
        <ActionButtonOutlined
          variant="outlined"
          onClick={() => router.push("/authentification/login")}
        >
          Login
        </ActionButtonOutlined>
        <ActionButton
          variant="contained"
          onClick={() => router.push("/authentification/signup")}
        >
          Sign up
        </ActionButton>
      </>
    );
  }

  return (
    <Grid sx={{ p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item lg={6}>
          <Styled_IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/")}
          >
            <HandymanIcon />
          </Styled_IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={"flex-end"}
          container
          direction={"row"}
          alignItems={"center"}
          gap={1}
        >
          <FormControlLabel
            control={
              <Styled_Switch
                onChange={switchTheme}
                name="switchTheme"
                color="primary"
              />
            }
            label="Change theme"
          />
          {displayButtons()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderNotLogged;
