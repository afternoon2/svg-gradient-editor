import { Gradient } from "@/state/gradient.store";
import { AppColor } from "@/state/types";
import { FC } from "react";

const RenderStop: FC<{
  color: AppColor;
  colorsCount: number;
  index: number;
}> = ({ color, colorsCount, index }) => {
  const { value, offset } = color;
  return (
    <stop
      stopColor={`rgba(${value.join(", ")})`}
      offset={`${offset ?? index * (100 / colorsCount)}%`}
    />
  );
};

const RenderStops: FC<{ gradient: Gradient }> = ({ gradient }) => {
  if (gradient.useChroma) {
    return (
      <>
        {/* TODO: move to separate atom family */}
        {/* {gradient.output.map((color: OutputColor) => (
          <stop
            key={color.id}
            offset={`${color.offset}%`}
            stopColor={`rgba(${color.color.join(",")})`}
          />
        ))} */}
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
