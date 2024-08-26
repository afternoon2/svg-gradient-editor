import { FC, Fragment } from "react";
import RenderStops from "./render-stops";
import LinearGradientElement from "./linear-gradient";
import RadialGradientElement from "./radial-gradient";
import { GLOBAL_BLEND_MODE_ID } from "./consts";
import { useListContext } from "@/state/list";

const Defs: FC = () => {
  const {
    state: { globalBlendMode, gradients },
  } = useListContext();
  return (
    <defs>
      <filter id={GLOBAL_BLEND_MODE_ID}>
        <feBlend in="sourceGraphic" in2="FillPaint" mode={globalBlendMode} />
      </filter>
      {gradients.map((gradient) => {
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
      })}
    </defs>
  );
};

export default Defs;
