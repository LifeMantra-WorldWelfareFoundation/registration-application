import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { signOut } from "next-auth/react";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0e1e36] px-4">
      
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 text-center shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Welcome {session.user?.email}!
        </h2>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="rounded-xl bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  );
}
