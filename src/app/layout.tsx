"use client";
import { Roboto } from "next/font/google";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { ligthTeme, darkTheme } from "./theme/theme";
import "./globals.css";
import HeaderNotLogged from "@/components/headers/HeaderNotLogged";
import HeaderLogged from "@/components/headers/HeaderLogged";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogged, setIsLogged] = useState(false); //pour tester les deux layouts différents, passer isLogged à true
  const [isDark, setIsDark] = useState(false);

  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : ligthTeme}>
        <CssBaseline />

        <body className={roboto.className}>
          {!isLogged ? (
            <HeaderNotLogged switchTheme={switchTheme} />
          ) : (
            <HeaderLogged switchTheme={switchTheme} />
          )}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
