import { useSingleGradient } from "@/state/gradients.state";
import { Gradient, LinearGradient } from "@/state/types";
import { FC } from "react";
import SliderRow from "@/components/app/slider-row";

const isLinearGradient = (gradient: Gradient): gradient is LinearGradient =>
  gradient.type === "linear";

const LinearGradientProperties: FC<{ gradientId: string }> = ({
  gradientId,
}) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  if (isLinearGradient(gradient)) {
    return (
      <div className="w-full flex flex-col py-2">
        <SliderRow
          title="x1"
          min={-1}
          max={1}
          step={0.01}
          value={[gradient.attributes.x1]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                x1: newValues[0],
              },
            });
          }}
        />
        <SliderRow
          title="y1"
          min={-1}
          max={1}
          step={0.01}
          value={[gradient.attributes.y1]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                y1: newValues[0],
              },
            });
          }}
        />
        <SliderRow
          title="x2"
          min={-1}
          max={1}
          step={0.01}
          value={[gradient.attributes.x2]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                x2: newValues[0],
              },
            });
          }}
        />
        <SliderRow
          title="y2"
          min={-1}
          max={1}
          step={0.01}
          value={[gradient.attributes.y2]}
          onValueChange={(newValues) => {
            setGradient({
              ...gradient,
              attributes: {
                ...gradient.attributes,
                y2: newValues[0],
              },
            });
          }}
        />
      </div>
    );
  }
  return null;
};

export default LinearGradientProperties;
