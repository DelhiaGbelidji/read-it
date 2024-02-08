import { COLORS } from "../../../public/assets/colors";
import { IconButton, styled } from "@mui/material";

export const Styled_IconButton = styled(IconButton)(() => ({
    fontSize: "14px",
    lineHeight: "16px",
    backgroundColor: COLORS.white,
    color: COLORS.pink,
    boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
    "&:hover:not(.Mui-disabled), &.Mui-focused": {
      boxShadow: "0px 2px 4px rgba(25, 49, 84, 0.15)",
    },
    "&.Mui-disabled": {
      color: COLORS.disabledTextButton,
      backgroundColor: COLORS.disabledButton,
    },
  }));