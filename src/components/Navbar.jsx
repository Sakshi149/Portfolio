import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
        {/* LEFT: brand */}
        <a href="#home" className="flex items-center gap-1">
          <span className="text-xl font-bold text-foreground text-glow">
            Sakshi Chavan&apos;s
          </span>
          <span className="text-xl font-bold text-purple-400 text-glow">
            Portfolio
          </span>
        </a>

        {/* RIGHT: nav links + theme toggle + mobile menu */}
        <div className="flex items-center gap-4">
          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[17px] font-medium text-foreground/80 transition-all duration-300 
               hover:text-purple-500 hover:[text-shadow:0_0_10px_rgba(167,139,250,0.8)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* theme toggle */}
          <ThemeToggle />

          {/* mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile overlay menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-50 md:hidden",
            "flex flex-col items-center justify-center transition-opacity duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-semibold text-foreground/80 transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_10px_rgba(167,139,250,0.8)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
