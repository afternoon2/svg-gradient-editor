import { RadialGradientAttributes } from "@/state/types";

import { FC, PropsWithChildren } from "react";

const RadialGradientElement: FC<
  PropsWithChildren<{ gradientId: string; attrs: RadialGradientAttributes }>
> = ({ gradientId, attrs, children }) => {
  const { cx, cy, r, fx, fy, spreadMethod } = attrs;
  return (
    <radialGradient
      gradientUnits="objectBoundingBox"
      id={gradientId}
      cx={cx}
      cy={cy}
      r={r}
      fx={attrs.withFocalPoints ? fx : undefined}
      fy={attrs.withFocalPoints ? fy : undefined}
      spreadMethod={spreadMethod}
    >
      {children}
    </radialGradient>
  );
};

export default RadialGradientElement;
