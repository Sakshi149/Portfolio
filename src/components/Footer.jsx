import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-md text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Sakshi.co. All rights reserved.
        </p>

        <a
          href="#home"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
