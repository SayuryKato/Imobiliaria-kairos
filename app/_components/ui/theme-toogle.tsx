"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center rounded-full bg-secondary p-1 border border-border">
        <div className="h-9 w-18" />
      </div>
    );
  }

  return (
    <div className="flex items-center rounded-full bg-secondary p-1 border border-border w-fit">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setTheme("light")}
        className={`
          h-9 w-9 rounded-full transition-all
          ${
            theme === "light"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        <Sun className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={() => setTheme("dark")}
        className={`
          h-9 w-9 rounded-full transition-all
          ${
            theme === "dark"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
}
