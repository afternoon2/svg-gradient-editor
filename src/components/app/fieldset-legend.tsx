import { FC, PropsWithChildren, ReactNode } from "react";

const FieldsetLegend: FC<
  PropsWithChildren<{ title: ReactNode; className?: string }>
> = ({ title, className, children }) => (
  <fieldset className={`w-full flex flex-col ${className}`}>
    <legend className="text-sm font-semibold">{title}</legend>
    {children}
  </fieldset>
);

export default FieldsetLegend;
