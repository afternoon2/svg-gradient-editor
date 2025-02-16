import { GLOBAL_BLEND_MODE_ID } from "@/components/app/view/consts";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import { CircleData, EllipseData, RectData } from "@/state/types";
import { useAtomValue } from "jotai";
import { match } from "ts-pattern";
import { FC } from "react";

type CommonProps = { gradientId: string; fill: string; filter: string };

const figureId = (gradientId: string) => `figure-${gradientId}`;

const Rect: FC<RectData & CommonProps> = ({ gradientId, ...props }) => (
  <rect id={figureId(gradientId)} {...props} />
);

const Circle: FC<CircleData & CommonProps> = ({ gradientId, ...props }) => (
  <circle id={figureId(gradientId)} {...props} />
);

const Ellipse: FC<EllipseData & CommonProps> = ({ gradientId, ...props }) => (
  <ellipse id={figureId(gradientId)} {...props} />
);

const Figures: FC = () => {
  const state = useAtomValue(gradientStateReducerAtom);

  return (
    <g filter={`url(#${GLOBAL_BLEND_MODE_ID})`}>
      {state.gradients.map(
        ({ id, shape, rectData, circleData, ellipseData }) => {
          const fill = `url(#${id})`;
          const filter = `url(#${id}-blend-mode)`;
          return match(shape)
            .with("rect", () => (
              <Rect
                key={id}
                gradientId={id}
                fill={fill}
                filter={filter}
                {...rectData}
              />
            ))
            .with("circle", () => (
              <Circle
                key={id}
                gradientId={id}
                fill={fill}
                filter={filter}
                {...circleData}
              />
            ))
            .with("ellipse", () => (
              <Ellipse
                key={id}
                fill={fill}
                filter={filter}
                gradientId={id}
                {...ellipseData}
              />
            ))
            .exhaustive();
        },
      )}
    </g>
  );
};

export default Figures;
