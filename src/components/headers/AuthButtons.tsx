"use client";
import { usePathname, useRouter } from "next/navigation";

import { ActionButton, ActionButtonOutlined } from "../buttons/ActionButton";

const LoginButton = () => {
  const router = useRouter();

  return (
    <ActionButtonOutlined
      variant="outlined"
      onClick={() => router.push("/authentification/login")}
    >
      Login
    </ActionButtonOutlined>
  );
};

const SignUpButton = () => {
  const router = useRouter();
  return (
    <ActionButton
      variant="contained"
      onClick={() => router.push("/authentification/signup")}
    >
      Sign up
    </ActionButton>
  );
};

const AuthButtons = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        <LoginButton />
        <SignUpButton />
      </>
    );
  }

  return pathname === "/authentification/login" ? (
    <SignUpButton />
  ) : (
    <LoginButton />
  );
};

export default AuthButtons;
