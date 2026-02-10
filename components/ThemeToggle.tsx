"use client";

import { useTheme } from "@/hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <FaSun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}
