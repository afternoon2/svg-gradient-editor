import LinearGradientElement from "@/components/app/view/linear-gradient";
import RadialGradientElement from "@/components/app/view/radial-gradient";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import { GLOBAL_BLEND_MODE_ID } from "@/components/app/view/consts";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import RenderStops from "@/components/app/view/render-stops";
import { Gradient } from "@/state/types";
import { useAtomValue } from "jotai";
import { FC } from "react";

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
