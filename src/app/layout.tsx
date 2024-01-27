"use client";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

import "./globals.css";
import HeaderNotLogged from "@/components/headers/HeaderNotLogged";
import HeaderLogged from "@/components/headers/HeaderLogged";
import { ThemeProvider, createTheme } from "@mui/material";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogged, setIsLogged] = useState(false); //pour tester les deux layouts différents, passer isLogged à true
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
    setActiveTheme(desiredTheme === "light" ? lightTheme : darkTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <html lang="en">
      <ThemeProvider theme={activeTheme}>
        <body className={roboto.className}>
          {!isLogged ? (
            <HeaderNotLogged toggleTheme={toggleTheme} />
          ) : (
            <HeaderLogged toggleTheme={toggleTheme} />
          )}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
