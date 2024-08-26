import { useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";
import { artboardSizeAtom } from "@/state/artboard.state";

const Artboard: FC<PropsWithChildren> = ({ children }) => {
  const artboardSize = useAtomValue(artboardSizeAtom);

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
