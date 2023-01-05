/** @format */

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      >
        Continue with google
      </button>
      <button
        onClick={() =>
          signIn("facebook", { callbackUrl: "http://localhost:3000" })
        }
      >
        Continue with facebook
      </button>
    </>
  );
}
