import { FC, Fragment } from "react";
import RenderStops from "./render-stops";
import LinearGradientElement from "./linear-gradient";
import RadialGradientElement from "./radial-gradient";
import { GLOBAL_BLEND_MODE_ID } from "./consts";
import { useAtomValue } from "jotai";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import {
  gradientIdsAtom,
  useSingleGradient,
} from "../../../state/gradients.state";

const GradientDef: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, _] = useSingleGradient(gradientId);

  const stops = <RenderStops gradient={gradient} />;

  return (
    <Fragment key={gradient.id}>
      {gradient.type === "linear" && (
        <LinearGradientElement gradient={gradient}>
          {stops}
        </LinearGradientElement>
      )}
      {gradient.type === "radial" && (
        <RadialGradientElement gradient={gradient}>
          {stops}
        </RadialGradientElement>
      )}
      <filter id={gradient.blendMode.id}>
        <feBlend in="FillPaint" mode={gradient.blendMode.mode} />
      </filter>
    </Fragment>
  );
};

const Defs: FC = () => {
  const globalBlendMode = useAtomValue(globalBlendModeAtom);
  const gradientIds = useAtomValue(gradientIdsAtom);
  return (
    <defs>
      <filter id={GLOBAL_BLEND_MODE_ID}>
        <feBlend in="sourceGraphic" in2="FillPaint" mode={globalBlendMode} />
      </filter>
      {gradientIds.map((gradientIds) => (
        <GradientDef gradientId={gradientIds} />
      ))}
    </defs>
  );
};

export default Defs;
