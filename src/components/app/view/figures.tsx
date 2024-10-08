import { GLOBAL_BLEND_MODE_ID } from "@/components/app/view/consts";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import { artboardSizeAtom } from "@/state/artboard.state";
import { useAtomValue } from "jotai";
import { FC } from "react";

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
  const state = useAtomValue(gradientStateReducerAtom);
  const artboardSize = useAtomValue(artboardSizeAtom);

  return (
    <g filter={`url(#${GLOBAL_BLEND_MODE_ID})`}>
      {state.gradients.map(({ id }) => (
        <GradientRect key={id} gradientId={id} artboardSize={artboardSize} />
      ))}
    </g>
  );
};

export default Figures;
