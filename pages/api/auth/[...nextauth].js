/** @format */

import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import MicrosoftProvider from "next-auth/providers/azure-ad";

/**
 * apple
 * google
 * facebook
 * microsoft
 * email
 * mobile
 */

export const authOptions = {
  providers: [
    // AppleProvider({}),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
    }),
    // MicrosoftProvider({}),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
};

export default NextAuth(authOptions);
