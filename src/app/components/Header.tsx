"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
};

const Header = ({ isDarkMode, setIsDarkMode }: Props) => {
  return (
    <div className="w-full h-10 fixed top-5 left-0 z-50 bg-transparent flex items-center justify-between">
      <div className="w-1/2 max-w-120 h-full flex items-center justify-evenly">
        <h1 className="text-[#0e0d0c] dark:text-[#ffd000] cursor-pointer">Zwierzu</h1>
          <button className="text-[#0e0d0c] dark:text-[#ffd000] cursor-pointer">About</button>
          <button className="text-[#0e0d0c] dark:text-[#ffd000] cursor-pointer">Projects</button>
      </div>
      <div className="w-[20%] h-full flex items-center justify-end">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-[#0e0d0c] dark:text-[#ffd000] cursor-pointer">
          {isDarkMode ? <Sun /> : <Moon />}
          </button>
      </div>
    </div>
  );
};

export default Header;
