import { useSingleGradient } from "@/state/gradients.state";
import { Gradient, RadialGradient } from "@/state/types";
import { FC } from "react";
import SliderRow from "@/components/app/slider-row";
import SwitchRow from "../switch-row";

const isRadialGradient = (gradient: Gradient): gradient is RadialGradient =>
  gradient.type === "radial";

const RadialGradientProperties: FC<{ gradientId: string }> = ({
  gradientId,
}) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  if (isRadialGradient(gradient)) {
    return (
      <div className="w-full flex flex-col py-2">
        <SliderRow
          title="cx"
          min={0}
          max={1}
          step={0.01}
          value={[gradient.attributes.cx]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                cx: newValues[0],
              },
            });
          }}
        />
        <SliderRow
          title="cy"
          min={0}
          max={1}
          step={0.01}
          value={[gradient.attributes.cy]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                cy: newValues[0],
              },
            });
          }}
        />
        <SliderRow
          title="r"
          min={0}
          max={10}
          step={0.01}
          value={[gradient.attributes.r]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                r: newValues[0],
              },
            });
          }}
        />
        <SwitchRow
          label="Focal points"
          checked={gradient.focalPoints}
          onChange={(value) => {
            setGradient((prev) => ({
              ...prev,
              focalPoints: value,
            }));
          }}
        />
        {gradient.focalPoints && (
          <>
            <SliderRow
              title="fx"
              min={-1}
              max={1}
              step={0.01}
              value={[gradient.attributes.fx ?? 0.5]}
              onValueChange={(newValue) => {
                setGradient({
                  ...gradient,
                  attributes: {
                    ...gradient.attributes,
                    fx: newValue[0],
                  },
                });
              }}
            />
            <SliderRow
              title="fy"
              min={-1}
              max={1}
              step={0.01}
              value={[gradient.attributes.fy ?? 0.5]}
              onValueChange={(newValue) => {
                setGradient({
                  ...gradient,
                  attributes: {
                    ...gradient.attributes,
                    fy: newValue[0],
                  },
                });
              }}
            />
          </>
        )}
      </div>
    );
  }
  return null;
};

export default RadialGradientProperties;
