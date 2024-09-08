import { useAtomValue, useSetAtom } from "jotai";
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { artboardPresentAtom, artboardSizeAtom } from "@/state/artboard.state";
import { themeAtom } from "@/state/theme.state";

const Artboard: FC<PropsWithChildren> = ({ children }) => {
  const svgRef = useRef(null);
  const artboardSize = useAtomValue(artboardSizeAtom);
  const theme = useAtomValue(themeAtom);
  const setArtboardPresent = useSetAtom(artboardPresentAtom);

  useEffect(() => {
    if (svgRef.current) setArtboardPresent(true);
  }, [svgRef]);

  return (
    <svg
      ref={svgRef}
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
