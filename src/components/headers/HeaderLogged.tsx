"use client";
import { Avatar, FormControlLabel, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ContrastIcon from "@mui/icons-material/Contrast";

import { Styled_IconButton } from "../buttons/IconButton.style";
import { Styled_Switch } from "../switch/Switch.style";
import { Type_Props_HeaderLogged } from "@/types/public.type";
import { COLORS } from "@/assets/colors";
import { useRouter } from "next/navigation";

const HeaderLogged = ({ toggleTheme }: Type_Props_HeaderLogged) => {
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
              <Styled_Switch onChange={toggleTheme} name="toggleTheme" />
            }
            label={<ContrastIcon />}
            labelPlacement="start"
          />
          <Avatar
            sx={{ bgcolor: COLORS.black }}
            onClick={() => router.push("/profile")}
          >
            DG
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderLogged;
