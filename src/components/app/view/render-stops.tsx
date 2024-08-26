import { Gradient, OutputColor } from "@/state/types";
import { FC } from "react";

const RenderStops: FC<{ gradient: Gradient }> = ({ gradient }) => {
  if (gradient.chroma) {
    return (
      <>
        {gradient.output.map((color: OutputColor) => (
          <stop
            key={color.id}
            offset={`${color.offset}%`}
            stopColor={`rgba(${color.color.join(",")})`}
          />
        ))}
      </>
    );
  }
  return (
    <>
      {gradient.colors.map((color) => (
        <stop
          key={color.id}
          stopColor={`rgba(${color.color[0]}, ${color.color[1]}, ${color.color[2]}, ${color.color[3]})`}
          offset={`${
            gradient.colors.indexOf(color) * (100 / gradient.colors.length)
          }%`}
        />
      ))}
    </>
  );
};

export default RenderStops;
