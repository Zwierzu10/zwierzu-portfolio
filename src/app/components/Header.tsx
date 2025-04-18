"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
};

const Header = ({ isDarkMode, setIsDarkMode }: Props) => {
  return (
    <div className="w-full h-[9vh] bg-transparent flex items-center justify-between">
      <div className="w-[1%] max-w-120 h-full flex items-center justify-center">
      </div>
      <div className="w-[20%] max-w-30 h-full flex items-center justify-center">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-[#0e0d0c] dark:text-[#ffd000] cursor-pointer">
          {isDarkMode ? <Sun /> : <Moon />}
          </button>
      </div>
    </div>
  );
};

export default Header;
