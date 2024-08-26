import { useListContext } from "@/state/list";
import { FC } from "react";
import { GLOBAL_BLEND_MODE_ID } from "./consts";

const Figures: FC = () => {
  const {
    state: { gradients, artboardSize },
  } = useListContext();
  return (
    <g filter={`url(#${GLOBAL_BLEND_MODE_ID})`}>
      {gradients.map(({ id, blendMode }) => {
        return (
          <rect
            key={id}
            id={id}
            x={0}
            y={0}
            width={artboardSize[0]}
            height={artboardSize[1]}
            fill={`url(#${id})`}
            filter={`url(#${blendMode.id})`}
          />
        );
      })}
    </g>
  );
};

export default Figures;
