import { FC, PropsWithChildren } from "react";

const Properties: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full flex flex-col py-2">{children}</div>
);

export default Properties;
