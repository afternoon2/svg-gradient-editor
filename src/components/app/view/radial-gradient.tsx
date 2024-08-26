import { RadialGradient } from "@/state/types";
import { FC, PropsWithChildren } from "react";

const RadialGradientElement: FC<
  PropsWithChildren<{ gradient: RadialGradient }>
> = ({ gradient, children }) => {
  const { cx, cy, r, fx, fy, spreadMethod } = gradient.attributes;
  return (
    <radialGradient
      gradientUnits="objectBoundingBox"
      id={gradient.id}
      cx={cx}
      cy={cy}
      r={r}
      fx={gradient.focalPoints ? fx : undefined}
      fy={gradient.focalPoints ? fy : undefined}
      spreadMethod={spreadMethod}
    >
      {children}
    </radialGradient>
  );
};

export default RadialGradientElement;
