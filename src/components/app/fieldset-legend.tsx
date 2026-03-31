import { FC, PropsWithChildren, ReactNode } from "react";

const FieldsetLegend: FC<
  PropsWithChildren<{ title: ReactNode; className?: string }>
> = ({ title, className, children }) => (
  <fieldset
    className={`w-full flex flex-col gap-2 border-2 border-border rounded-lg p-3 ${className}`}
  >
    <legend className="text-sm font-bold uppercase tracking-widest text-foreground px-2">{title}</legend>
    {children}
  </fieldset>
);

export default FieldsetLegend;
