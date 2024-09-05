import {
  chromaUsageFamily,
  gradientColorFamily,
  gradientColorIdsFamily,
} from "@/state/gradients.state";
import { useAtomValue } from "jotai";
import { FC } from "react";

const RenderStop: FC<{
  colorId: string;
  colorsCount: number;
  index: number;
}> = ({ colorId, colorsCount, index }) => {
  const { value } = useAtomValue(gradientColorFamily(colorId));

  return (
    <stop
      stopColor={`rgba(${value.join(", ")})`}
      offset={`${index * (100 / colorsCount)}%`}
    />
  );
};

const RenderStops: FC<{ gradientId: string }> = ({ gradientId }) => {
  const chromaUsageAtom = useAtomValue(chromaUsageFamily(gradientId));
  const colorIdsAtom = useAtomValue(gradientColorIdsFamily(gradientId));

  if (chromaUsageAtom.value) {
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
      {colorIdsAtom.colorIds.map((colorId, index, arr) => (
        <RenderStop
          key={colorId}
          colorId={colorId}
          colorsCount={arr.length}
          index={index}
        />
      ))}
    </>
  );
};

export default RenderStops;
