'use client'
import Header from "./components/Header";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [IsDarkMode, SetIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", IsDarkMode);
  }, [IsDarkMode]);

  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-start bg-[#f8f7f6] dark:bg-[#090807]">
      <Header isDarkMode={IsDarkMode} setIsDarkMode={SetIsDarkMode} />
    </div>
  );
}