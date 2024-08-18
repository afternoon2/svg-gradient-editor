import { FC, PropsWithChildren } from "react";

export const TypographyH4: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <h4
    className={`scroll-m-20 text-xl font-semibold tracking-normal${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </h4>
);
