import { Button, styled } from "@mui/material";

import { COLORS } from "@/assets/colors";

export const ActionButton = styled(Button)(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: COLORS.backgroundButton,
  color: COLORS.white,
  borderRadius: "50px",
  boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
  "&:hover:not(.Mui-disabled), &.Mui-focused": {
    backgroundColor: COLORS.hoverButton,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
  },
  "&.Mui-disabled": {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
}));
