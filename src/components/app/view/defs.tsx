import { FC } from "react";
import RenderStops from "./render-stops";
import LinearGradientElement from "./linear-gradient";
import RadialGradientElement from "./radial-gradient";
import { GLOBAL_BLEND_MODE_ID } from "./consts";
import { useAtomValue } from "jotai";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import { Gradient, gradientStateReducerAtom } from "@/state/gradient.store";

const GradientDef: FC<{ gradient: Gradient }> = ({ gradient }) => {
  const stops = <RenderStops gradient={gradient} />;

  return (
    <>
      {gradient.type === "linear" && (
        <LinearGradientElement
          gradientId={gradient.id}
          attrs={gradient.linearAttributes}
        >
          {stops}
        </LinearGradientElement>
      )}
      {gradient.type === "radial" && (
        <RadialGradientElement
          gradientId={gradient.id}
          attrs={gradient.radialAttributes}
        >
          {stops}
        </RadialGradientElement>
      )}
      <filter id={`${gradient.id}-blend-mode`}>
        <feBlend in="FillPaint" mode={gradient.blendMode} />
      </filter>
    </>
  );
};

const Defs: FC = () => {
  const globalBlendMode = useAtomValue(globalBlendModeAtom);
  const state = useAtomValue(gradientStateReducerAtom);

  return (
    <defs>
      <filter id={GLOBAL_BLEND_MODE_ID}>
        <feBlend in="sourceGraphic" in2="FillPaint" mode={globalBlendMode} />
      </filter>
      {state.gradients.map((gradient) => (
        <GradientDef key={gradient.id} gradient={gradient} />
      ))}
    </defs>
  );
};

export default Defs;
