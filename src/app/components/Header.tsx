"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
};

const Header = ({ isDarkMode, setIsDarkMode }: Props) => {
  return (
    <div className="w-full h-16 fixed top-5 left-0 z-50 bg-transparent flex justify-center">
      <div className="w-[80%] h-full flex items-center justify-between bg-white/80 backdrop-blur-md dark:bg-[#090807]/80 shadow-md dark:shadow-black/20 rounded-2xl p-4">

        <h1 className="text-[#0e0d0c] dark:text-[#ffd000]">Zwierzu</h1>
        <button className="text-[#0e0d0c] dark:text-[#ffd000]">About</button>
        <button className="text-[#0e0d0c] dark:text-[#ffd000]">Projects</button>

        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-[#0e0d0c] dark:text-[#ffd000]">
        {isDarkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
