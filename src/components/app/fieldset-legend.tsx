import { FC, PropsWithChildren, ReactNode } from "react";

const FieldsetLegend: FC<PropsWithChildren<{ title: ReactNode; className?: string }>> = ({
  title,
  className,
  children,
}) => (
  <fieldset
    className={`w-full min-w-0 flex flex-col gap-2 border-2 border-border rounded-lg px-4 pb-3 pt-2 ${className}`}
  >
    <legend className="text-sm font-bold uppercase tracking-widest text-foreground ml-[-2px] px-1">
      {title}
    </legend>
    {children}
  </fieldset>
);

export default FieldsetLegend;
