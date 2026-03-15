// This loading use everywhere
import Logo from "@/components/layout/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white/80 backdrop-blur-sm fixed inset-0 z-[9999]">
      <div className="relative flex flex-col items-center">
        {/* 1. Logo Container with Scale Effect */}
        <div className="animate-ping duration-1000 ease-in-out transform transition-all">
          <Logo />
        </div>

        {/* 2. Professional Progress Bar (Linear Loader) */}
        <div className="mt-8 w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 animate-loading-bar w-full origin-left"></div>
        </div>

        {/* 3. Subtle Playful Subtext */}
        <p className="mt-4 text-sm font-medium text-gray-400 tracking-[0.2em] uppercase animate-bounce-slow">
          Loading <span className="text-blue-500">Fun</span>...
        </p>

        {/* 4. Decorative Background Glow (Optional - for Premium Feel) */}
        <div className="absolute -z-10 w-32 h-32 bg-pink-100 blur-[50px] rounded-full top-0"></div>
        <div className="absolute -z-10 w-32 h-32 bg-blue-100 blur-[50px] rounded-full bottom-0"></div>
      </div>
    </div>
  );
};

export default Loading;
