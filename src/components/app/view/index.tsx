import { FC, PropsWithChildren } from "react";

const View: FC<PropsWithChildren> = ({ children }) => (
  <main className="flex flex-col h-full items-center justify-center relative">
    {children}
  </main>
);

export default View;
