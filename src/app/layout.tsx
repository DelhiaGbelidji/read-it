"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { ligthTeme, darkTheme } from "./theme/theme";
import "./globals.css";
import Header from "@/components//header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : ligthTeme}>
        <CssBaseline />

        <body className={inter.className}>
          <Header switchTheme={switchTheme} />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
