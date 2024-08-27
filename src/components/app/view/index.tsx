import { FC, PropsWithChildren } from "react";

const View: FC<PropsWithChildren> = ({ children }) => (
  <main className="w-full h-screen max-h-full relative flex items-center justify-center">
    {children}
  </main>
);

export default View;
