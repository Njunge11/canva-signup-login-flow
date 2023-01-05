/** @format */

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/login" },
  callbacks: {
    authorized({ req, token }) {
      return !!token;
    },
  },
});

export const config = { matcher: ["/"] };
