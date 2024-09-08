import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full h-screen max-h-full">{children}</div>
);

export default Container;
