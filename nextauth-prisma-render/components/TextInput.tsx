"use client";

import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({ icon, ...props }) => {
  return (
    <div className="relative flex items-center">
      {icon && (
        <span className="pointer-events-none absolute left-4 text-neutral-200">
          {icon}
        </span>
      )}
      <input
        {...props}
        className={`w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none [box-shadow:inset_0_1px_2px_rgba(255,255,255,0.1)] ${
          icon ? "pl-12" : "pl-4"
        } pr-4`}
      />
    </div>
  );
};

export default TextInput;
