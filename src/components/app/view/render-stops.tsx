import { AppColor, Gradient } from "@/state/types";
import { FC } from "react";

const RenderStop: FC<{
  color: AppColor;
  colorsCount: number;
  index: number;
}> = ({ color, colorsCount, index }) => {
  const { css, offset } = color;
  return (
    <stop
      stopColor={css}
      offset={`${offset ?? index * (100 / colorsCount)}%`}
    />
  );
};

const RenderStops: FC<{ gradient: Gradient }> = ({ gradient }) => {
  if (gradient.useChroma) {
    return (
      <>
        {gradient.output.map((color: AppColor) => (
          <stop
            key={color.id}
            offset={`${color.offset}%`}
            stopColor={color.css}
          />
        ))}
      </>
    );
  }
  return (
    <>
      {gradient.input.map((color, index, arr) => (
        <RenderStop
          key={color.id}
          color={color}
          colorsCount={arr.length}
          index={index}
        />
      ))}
    </>
  );
};

export default RenderStops;
