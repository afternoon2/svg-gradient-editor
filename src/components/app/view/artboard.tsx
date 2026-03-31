import { artboardBgColorAtom, artboardPresentAtom, artboardSizeAtom } from "@/state/artboard.state";
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";

const Artboard: FC<PropsWithChildren> = ({ children }) => {
  const svgRef = useRef(null);
  const artboardSize = useAtomValue(artboardSizeAtom);
  const bgColor = useAtomValue(artboardBgColorAtom);
  const setArtboardPresent = useSetAtom(artboardPresentAtom);

  useEffect(() => {
    if (svgRef.current) setArtboardPresent(true);
  }, [svgRef]);

  const bgCss = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;

  return (
    <svg
      ref={svgRef}
      id="artboard"
      width={artboardSize[0]}
      height={artboardSize[1]}
      viewBox={`0 0 ${artboardSize.join(" ")}`}
      className="border-2 box-border border-border rounded-lg shadow-lg dark:shadow-[0_4px_16px_rgba(255,255,255,0.08)]"
      style={{ backgroundColor: bgCss }}
    >
      {children}
    </svg>
  );
};

export default Artboard;
