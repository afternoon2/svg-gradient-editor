import { FC, PropsWithChildren, ReactNode } from "react";

const GradientSection: FC<PropsWithChildren<{ title: ReactNode }>> = ({
  title,
  children,
}) => (
  <fieldset className="flex flex-col gap-6 rounded-lg border p-4">
    <legend className="-ml-1 px-1 text-sm">{title}</legend>
    {children}
  </fieldset>
);

export default GradientSection;
