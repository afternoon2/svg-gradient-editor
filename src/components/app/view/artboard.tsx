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
      className={`bg-white border-x-[1px] border-y-[1px] box-border border-slate-600 dark:border-slate-300`}
    >
      {children}
    </svg>
  );
};

export default Artboard;
