/** @format */

import { signIn, getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }) {
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
      <div>
        <form method="post" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
            />
          </label>
          <button type="submit">Continue with email (magic link)</button>
        </form>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
