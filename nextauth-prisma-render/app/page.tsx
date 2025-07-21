import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <h2>Welcome {session.user?.email}!</h2>
      <button onClick={() => signOut()}>Log out</button>
    </>
  );
}
