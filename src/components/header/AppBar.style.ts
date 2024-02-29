import { COLORS } from "@/utils/theme/";
import { AppBar, styled } from "@mui/material";

export const Styled_AppBar = styled(AppBar)(({ theme }) => ({
    '&.MuiAppBar-root': {
        backgroundColor: COLORS.lightGrey,
    }
  }));