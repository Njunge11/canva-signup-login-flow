/** @format */

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  if (session === null) {
    router.push("/login");
  }

  return (
    <>
      <img src={session?.user.image} />
      <h1>Hello {session?.user.name}</h1>
    </>
  );
}
