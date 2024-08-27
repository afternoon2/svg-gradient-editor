import { FC, PropsWithChildren, ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

const Panel: FC<
  PropsWithChildren<{ title: ReactNode; className?: string }>
> = ({ title, className, children }) => (
  <section
    className={`bg-muted rounded shadow-md w-[300px] h-auto p-2 flex flex-col absolute ${className}`}
  >
    <header className="w-full flex items-center">
      <h5 className="text-sm font-semibold">{title}</h5>
    </header>
    <Separator className="my-2" />
    <div className="w-full flex flex-col">{children}</div>
  </section>
);

export default Panel;
