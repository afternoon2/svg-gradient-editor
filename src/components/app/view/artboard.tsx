import { artboardPresentAtom, artboardSizeAtom } from "@/state/artboard.state";
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";

const Artboard: FC<PropsWithChildren> = ({ children }) => {
  const svgRef = useRef(null);
  const artboardSize = useAtomValue(artboardSizeAtom);
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
      className="bg-white dark:bg-zinc-950 border-2 box-border border-border rounded-lg shadow-sm dark:shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
    >
      {children}
    </svg>
  );
};

export default Artboard;
