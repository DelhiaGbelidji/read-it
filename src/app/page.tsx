"use client";
import Landing from "@/components/landing/Landing";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Landing />{" "}
    </main>
  );
}
