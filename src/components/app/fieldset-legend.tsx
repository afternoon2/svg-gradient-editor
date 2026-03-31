import { FC, PropsWithChildren, ReactNode } from "react";

const FieldsetLegend: FC<
  PropsWithChildren<{ title: ReactNode; className?: string }>
> = ({ title, className, children }) => (
  <fieldset className={`w-full flex flex-col gap-2 ${className}`}>
    <legend className="text-sm font-semibold pb-1">{title}</legend>
    {children}
  </fieldset>
);

export default FieldsetLegend;
