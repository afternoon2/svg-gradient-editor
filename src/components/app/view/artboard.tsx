import { useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";
import { artboardSizeAtom } from "@/state/artboard.state";
import { themeAtom } from "@/state/theme.state";

const Artboard: FC<PropsWithChildren> = ({ children }) => {
  const artboardSize = useAtomValue(artboardSizeAtom);
  const theme = useAtomValue(themeAtom);

  return (
    <svg
      id="artboard"
      width={artboardSize[0]}
      height={artboardSize[1]}
      viewBox={`0 0 ${artboardSize.join(" ")}`}
      className={`bg-white border-x-[1px] border-y-[1px] box-border ${
        theme === "dark" ? "border-transparent" : "border-black"
      }`}
    >
      {children}
    </svg>
  );
};

export default Artboard;
