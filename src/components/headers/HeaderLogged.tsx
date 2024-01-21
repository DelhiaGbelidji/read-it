"use client";
import { Avatar, FormControlLabel, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Styled_IconButton } from "../buttons/IconButton.style";
import { Styled_Switch } from "../switch/Switch.style";
import { Type_Props_HeaderLogged } from "@/types/public.type";
import { COLORS } from "@/assets/colors";

const HeaderLogged = ({ switchTheme }: Type_Props_HeaderLogged) => {
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
          >
            <MenuIcon />
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
          <Avatar sx={{ bgcolor: COLORS.black }}>DG</Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderLogged;
