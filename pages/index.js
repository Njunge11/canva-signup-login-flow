/** @format */

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("the session", session);
  return (
    <>
      <img src={session?.user.image} />
      <h1>Hello {session?.user.name}</h1>
    </>
  );
}
