import { COLORS } from "@/assets/colors";
import { Switch, alpha, styled } from "@mui/material";

export const Styled_Switch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: COLORS.pink,
      '&:hover': {
        backgroundColor: alpha(COLORS.pink, theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor:COLORS.pink,
    },
  }));