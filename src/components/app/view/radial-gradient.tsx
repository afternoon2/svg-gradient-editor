import { radialGradientAttributesFamily } from "@/state/gradients.store";

import { useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";

const RadialGradientElement: FC<PropsWithChildren<{ gradientId: string }>> = ({
  gradientId,
  children,
}) => {
  const gradient = useAtomValue(radialGradientAttributesFamily(gradientId));
  const { cx, cy, r, fx, fy, spreadMethod } = gradient.attrs;
  return (
    <radialGradient
      gradientUnits="objectBoundingBox"
      id={gradient.id}
      cx={cx}
      cy={cy}
      r={r}
      fx={gradient.attrs.withFocalPoints ? fx : undefined}
      fy={gradient.attrs.withFocalPoints ? fy : undefined}
      spreadMethod={spreadMethod}
    >
      {children}
    </radialGradient>
  );
};

export default RadialGradientElement;
