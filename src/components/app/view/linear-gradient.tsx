import { linearGradientAttributesFamily } from "@/state/gradients.state";
import { useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";

const LinearGradientElement: FC<PropsWithChildren<{ gradientId: string }>> = ({
  gradientId,
  children,
}) => {
  const gradient = useAtomValue(linearGradientAttributesFamily(gradientId));
  return (
    <linearGradient
      gradientUnits="objectBoundingBox"
      id={gradient.id}
      {...gradient.attrs}
    >
      {children}
    </linearGradient>
  );
};

export default LinearGradientElement;
