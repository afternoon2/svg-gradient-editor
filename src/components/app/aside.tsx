import { SparklesIcon } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { TypographyH4 } from "@/components/ui/typography-h4";
import { ModeToggle } from "./mode-toggle";

const ROW_CLASSNAMES = "w-full pb-2 flex items-center justify-between";

const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className="w-full pb-2 flex flex-col">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <SparklesIcon className="h-6 w-6" />
        <TypographyH4 className="pl-2">SVG Gradient Editor</TypographyH4>
      </div>
      <ModeToggle />
    </div>
    {children}
  </header>
);

const Row: FC<PropsWithChildren> = ({ children }) => (
  <div className={ROW_CLASSNAMES}>{children}</div>
);

const Aside: FC<PropsWithChildren> & {
  Header: FC<PropsWithChildren>;
  Row: FC<PropsWithChildren>;
} = ({ children }) => (
  <aside className="bg-muted/40 px-4 py-4 relative h-full flex flex-col overflow-hidden">
    {children}
  </aside>
);

Aside.Header = Header;
Aside.Row = Row;

export default Aside;
