"use client";
import { FormControlLabel, Grid, IconButton, Stack } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import HandymanIcon from "@mui/icons-material/Handyman";

import { Styled_IconButton } from "../buttons/IconButton.style";
import { Styled_Switch } from "../switch/Switch.style";
import { Type_Props_HeaderNotLogged } from "@/types/public.type";
import { usePathname, useRouter } from "next/navigation";
import AuthButtons from "./AuthButtons";

const HeaderNotLogged = ({ toggleTheme }: Type_Props_HeaderNotLogged) => {
  const router = useRouter();

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
          xs={3}
          justifyContent={"flex-start"}
          container
          direction={"row"}
          alignItems={"center"}
          gap={2}
        >
          <IconButton onClick={toggleTheme} name="toggleTheme">
            <ContrastIcon />
          </IconButton>
          <AuthButtons />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderNotLogged;
