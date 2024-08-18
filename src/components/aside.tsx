import { SparklesIcon } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { TypographyH4 } from "./ui/typography-h4";
import { ModeToggle } from "./mode-toggle";

const ROW_CLASSNAMES = "w-full py-2 flex items-center justify-between";

const Header: FC = () => (
  <header className={ROW_CLASSNAMES}>
    <div className="flex items-center">
      <SparklesIcon className="h-6 w-6" />
      <TypographyH4 className="pl-2">SVG Gradient Editor</TypographyH4>
    </div>
    <ModeToggle />
  </header>
);

const Row: FC<PropsWithChildren> = ({ children }) => (
  <div className={ROW_CLASSNAMES}>{children}</div>
);

const Aside: FC<PropsWithChildren> & {
  Header: FC;
  Row: FC<PropsWithChildren>;
} = ({ children }) => (
  <aside className="hidden border-r bg-muted/40 md:block px-4 py-4">
    {children}
  </aside>
);

Aside.Header = Header;
Aside.Row = Row;

export default Aside;
