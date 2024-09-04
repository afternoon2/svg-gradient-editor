import { FC } from "react";
import { GLOBAL_BLEND_MODE_ID } from "./consts";
import { gradientIdsAtom } from "@/state/gradients.store";
import { useAtomValue } from "jotai";
import { artboardSizeAtom } from "@/state/artboard.state";

const GradientRect: FC<{
  gradientId: string;
  artboardSize: [number, number];
}> = ({ gradientId, artboardSize }) => {
  return (
    <rect
      id={`figure-${gradientId}`}
      x={0}
      y={0}
      width={artboardSize[0]}
      height={artboardSize[1]}
      fill={`url(#${gradientId})`}
      filter={`url(#${gradientId}-blend-mode)`}
    />
  );
};

const Figures: FC = () => {
  const gradientIds = useAtomValue(gradientIdsAtom);
  const artboardSize = useAtomValue(artboardSizeAtom);

  return (
    <g filter={`url(#${GLOBAL_BLEND_MODE_ID})`}>
      {gradientIds.map((id) => (
        <GradientRect key={id} gradientId={id} artboardSize={artboardSize} />
      ))}
    </g>
  );
};

export default Figures;
