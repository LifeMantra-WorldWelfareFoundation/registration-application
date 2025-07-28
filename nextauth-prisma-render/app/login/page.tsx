// Login.tsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/TextInput";
import OAuthButtonGroup from "@/components/OAuthButtonGroup";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0e1e36] px-4">
      

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl [box-shadow:inset_0_1px_0_rgba(255,255,255,0.2)]">
        <h1 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <TextInput
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<FaUser />}
            autoComplete="email"
            required
          />
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<FaLock />}
            autoComplete="current-password"
            required
          />

          <div className="flex flex-wrap items-center justify-between text-sm text-neutral-300">
            <label htmlFor="remember-me" className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded bg-transparent accent-white/30"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-white/20 px-4 py-3 font-semibold text-white shadow-lg backdrop-blur transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Login
          </button>
        </form>

        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="mx-4 flex-shrink text-sm text-neutral-300">
            Or continue with
          </span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <OAuthButtonGroup />

        <p className="mt-8 text-center text-sm text-neutral-400">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-white hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
