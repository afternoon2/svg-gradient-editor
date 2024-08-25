import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="grid w-full h-screen max-h-full grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[450px_1fr]">
    {children}
  </div>
);

export default Container;
