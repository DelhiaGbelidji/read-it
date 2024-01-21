"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { COLORS } from "@/assets/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const ThemeRegistry = ({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode: string;
}) => {
  const lightTheme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: roboto.style.fontFamily,
    },
    palette: {
      background: {
        default: COLORS.white,
        paper: COLORS.white,
      },
      divider: COLORS.grey,
      text: {
        primary: COLORS.black,
        secondary: COLORS.grey,
      },
    },
  });

  const darkTheme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: roboto.style.fontFamily,
    },
    palette: {
      background: {
        default: COLORS.black,
        paper: COLORS.black,
      },
      divider: COLORS.lightPink,
      text: {
        primary: COLORS.white,
        secondary: COLORS.grey,
      },
    },
  });

  const theme = mode === "light" ? lightTheme : darkTheme;
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
