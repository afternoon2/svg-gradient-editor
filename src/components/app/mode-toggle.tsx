import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { themeAtom } from "@/state/theme.state";
import { useSetAtom } from "jotai";

export function ModeToggle() {
  const setTheme = useSetAtom(themeAtom);

  return (
    <Button
      size="icon"
      variant="link"
      aria-label="Toggle theme"
      onClick={() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }}
      title="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
