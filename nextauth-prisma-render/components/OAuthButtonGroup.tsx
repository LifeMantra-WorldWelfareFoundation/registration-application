"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaDiscord, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const providers = [
  { name: "Google", icon: <FcGoogle className="h-6 w-6" /> },
  { name: "Facebook", icon: <FaFacebook className="h-6 w-6 text-[#1877F2]" /> },
  { name: "Twitter", icon: <FaXTwitter className="h-6 w-6 text-white" /> },
  {
    name: "Snapchat",
    icon: <FaSnapchatGhost className="h-6 w-6 text-[#FFFC00]" />,
  },
  { name: "Discord", icon: <FaDiscord className="h-6 w-6 text-[#5865F2]" /> },
];

const OAuthButtonGroup: React.FC = () => {
  const handleOAuthLogin = (provider: string) => {
    signIn(provider.toLowerCase());
  };

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          onClick={() => handleOAuthLogin(provider.name)}
          aria-label={`Continue with ${provider.name}`}
          className="flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-md backdrop-blur-md transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          {provider.icon}
        </button>
      ))}
    </div>
  );
};

export default OAuthButtonGroup;
