import { COLORS } from "@/assets/colors";
import { TabList } from "@mui/lab";
import { styled } from "@mui/material";

export const StyledTabList = styled(TabList)(() => ({
    '& .MuiTab-root': {
      '&.Mui-selected': {
        color: COLORS.pink,
        backgroundColor: COLORS.white,
      },
    },
    '& .MuiTabs-indicator': {
      backgroundColor: COLORS.pink,
    },
  }))
  