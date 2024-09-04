import { FC, Fragment } from "react";
import RenderStops from "./render-stops";
import LinearGradientElement from "./linear-gradient";
import RadialGradientElement from "./radial-gradient";
import { GLOBAL_BLEND_MODE_ID } from "./consts";
import { useAtomValue } from "jotai";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import {
  gradientBlendModeFamily,
  gradientTypeAtomFamily,
  gradientIdsAtom,
} from "@/state/gradients.store";

const GradientDef: FC<{ gradientId: string }> = ({ gradientId }) => {
  const gradientTypeAtom = useAtomValue(gradientTypeAtomFamily(gradientId));
  const blendMode = useAtomValue(gradientBlendModeFamily(gradientId));

  const stops = <RenderStops gradientId={gradientId} />;

  return (
    <Fragment key={gradientId}>
      {gradientTypeAtom.type === "linear" && (
        <LinearGradientElement gradientId={gradientId}>
          {stops}
        </LinearGradientElement>
      )}
      {gradientTypeAtom.type === "radial" && (
        <RadialGradientElement gradientId={gradientId}>
          {stops}
        </RadialGradientElement>
      )}
      <filter id={`${gradientId}-blend-mode`}>
        <feBlend in="FillPaint" mode={blendMode.blendMode} />
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
      {gradientIds.map((gradientId) => (
        <GradientDef key={gradientId} gradientId={gradientId} />
      ))}
    </defs>
  );
};

export default Defs;
