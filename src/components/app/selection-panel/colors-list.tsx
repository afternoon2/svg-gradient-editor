import { FC, PropsWithChildren } from "react";

const ColorsList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="w-full flex flex-col max-h-[400px] overflow-y-auto pt-2">
      {children}
    </ul>
  );
};

export default ColorsList;
