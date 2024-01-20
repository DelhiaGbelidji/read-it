import { Button, styled } from "@mui/material";

import { COLORS } from "@/assets/colors";

export const ActionButton = styled(Button)(({ theme }: any) => ({
  fontSize: "14px",
  lineHeight: "16px",
  padding: theme.spacing(2, 3),
  backgroundColor: COLORS.magentaButton,
  color: COLORS.white,
  boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
  "&:hover:not(.Mui-disabled), &.Mui-focused": {
    backgroundColor: COLORS.magentaButton,
    outline: `2px solid ${COLORS.magentaLightButton}`,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
  },
  "&.Mui-disabled": {
    color: COLORS.disabledTextButton,
    backgroundColor: COLORS.disabledButton,
  },
}));
