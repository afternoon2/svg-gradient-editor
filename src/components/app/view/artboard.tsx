import { useListContext } from "@/state/list";
import { FC, PropsWithChildren } from "react";

const Artboard: FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { artboardSize },
  } = useListContext();
  return (
    <svg
      width={artboardSize[0]}
      height={artboardSize[1]}
      viewBox={`0 0 ${artboardSize.join(" ")}`}
      className="bg-white border-x-red-600 border-y-red-600 border-x-2 border-y-2"
    >
      {children}
    </svg>
  );
};

export default Artboard;
