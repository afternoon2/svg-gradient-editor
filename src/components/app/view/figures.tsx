import { useListContext } from "@/state/list";
import { FC } from "react";
import { GLOBAL_BLEND_MODE_ID } from "./consts";

const Figures: FC = () => {
  const {
    state: { gradients },
  } = useListContext();
  return (
    <g filter={`url(#${GLOBAL_BLEND_MODE_ID})`}>
      {gradients.map(({ id }, index, arr) => {
        const blendModeId = arr[index].blendMode.id;
        return (
          <rect
            key={id}
            id={id}
            x={0}
            y={0}
            width="100%"
            height="100%"
            fill={`url(#${id})`}
            filter={`url(#${blendModeId})`}
          />
        );
      })}
    </g>
  );
};

export default Figures;
