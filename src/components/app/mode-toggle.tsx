import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { themeAtom } from "@/state/theme.state";
import { useSetAtom } from "jotai";
import { useCallback } from "react";

export function ModeToggle() {
  const setTheme = useSetAtom(themeAtom);

  const toggle = useCallback(() => {
    document.documentElement.classList.add("theme-transitioning");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 250);
  }, [setTheme]);

  return (
    <Button
      size="icon"
      variant="link"
      aria-label="Toggle theme"
      onClick={toggle}
      title="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
