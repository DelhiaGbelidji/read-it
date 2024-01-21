"use client";
import { Roboto } from "next/font/google";
import { useState } from "react";

import ThemeRegistry from "@/theme/ThemeRegistery";
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
  const [mode, setMode] = useState("light");

  const switchTheme = () => {
    setMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <html lang="en">
      <ThemeRegistry mode={mode}>
        <body className={roboto.className}>
          {!isLogged ? (
            <HeaderNotLogged switchTheme={switchTheme} />
          ) : (
            <HeaderLogged switchTheme={switchTheme} />
          )}
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
