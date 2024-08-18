import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="grid min-h-screen w-full grid-cols-[1fr_220px] md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_450px]">
    {children}
  </div>
);

export default Container;
