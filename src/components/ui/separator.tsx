import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    variant?: "default" | "gradient";
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, variant = "default", ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        variant === "gradient"
          ? "[background:var(--accent-gradient-full)]"
          : "bg-border",
        orientation === "horizontal"
          ? `w-full ${variant === "gradient" ? "h-[2px]" : "h-[1px]"}`
          : `h-full ${variant === "gradient" ? "w-[2px]" : "w-[1px]"}`,
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
