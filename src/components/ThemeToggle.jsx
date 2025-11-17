import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "p-2 rounded-full bg-transparent hover:opacity-80 transition-transform duration-300 hover:scale-110"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6" style={{ color: "yellow" }} />
      ) : (
        <Moon className="h-6 w-6" style={{ color: "#374151" }} />
      )}
    </button>
  );
};

export default ThemeToggle;
