import { LinearGradient } from "@/state/types";
import { FC, PropsWithChildren } from "react";

const LinearGradientElement: FC<
  PropsWithChildren<{ gradient: LinearGradient }>
> = ({ gradient, children }) => (
  <linearGradient
    gradientUnits="objectBoundingBox"
    id={gradient.id}
    {...gradient.attributes}
  >
    {children}
  </linearGradient>
);

export default LinearGradientElement;
