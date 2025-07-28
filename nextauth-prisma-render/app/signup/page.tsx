"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import TextInput from "@/components/TextInput";
import OAuthButtonGroup from "@/components/OAuthButtonGroup";
import { FaUser, FaLock } from "react-icons/fa";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0e1e36] px-4">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl [box-shadow:inset_0_1px_0_rgba(255,255,255,0.2)]">
        <h1 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl">
          Create an Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-6">
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
            autoComplete="new-password"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-white/20 px-4 py-3 font-semibold text-white shadow-lg backdrop-blur transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Sign Up
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
          Already have an account?{" "}
          <a href="/login" className="font-medium text-white hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
