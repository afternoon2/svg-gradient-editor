import { LinearGradientAttributes } from "@/state/types";
import { FC, PropsWithChildren } from "react";

const LinearGradientElement: FC<
  PropsWithChildren<{ attrs: LinearGradientAttributes; gradientId: string }>
> = ({ attrs, gradientId, children }) => {
  return (
    <linearGradient
      gradientUnits="objectBoundingBox"
      id={gradientId}
      {...attrs}
    >
      {children}
    </linearGradient>
  );
};

export default LinearGradientElement;
