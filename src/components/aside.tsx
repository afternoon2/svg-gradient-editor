import { SparklesIcon } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { TypographyH4 } from "./ui/typography-h4";
import { ModeToggle } from "./mode-toggle";

const Header: FC = () => (
  <header className="w-full pb-2 flex items-center justify-between">
    <div className="flex items-center">
      <SparklesIcon className="h-6 w-6" />
      <TypographyH4 className="pl-2">SVG Gradient Editor</TypographyH4>
    </div>
    <ModeToggle />
  </header>
);

const Aside: FC<PropsWithChildren> & { Header: FC } = ({ children }) => (
  <aside className="hidden border-r bg-muted/40 md:block px-4 py-4">
    {children}
  </aside>
);

Aside.Header = Header;

export default Aside;
