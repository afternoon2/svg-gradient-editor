import { ColorSpace, InputColor } from "@/state/types";
import chroma from "chroma-js";
import { FC, useMemo } from "react";

type Output =
  | { type: "rgba"; value: InputColor["color"] }
  | { type: "hsva"; value: InputColor["color"] }
  | { type: "hsla"; value: InputColor["color"] }
  | { type: "hex"; value: string };

const round = (v: number): number => parseFloat(v.toFixed(2));

const ColorValue: FC<{ color: InputColor; colorSpace: ColorSpace }> = ({
  color,
  colorSpace,
}) => {
  const convertedColor: Output = useMemo(() => {
    switch (colorSpace) {
      case "hex":
        return {
          type: "hex",
          value: chroma.rgb(...color.color).hex(),
        };
      case "hsla": {
        const output = chroma.rgb(...color.color);
        return {
          type: "hsla",
          value: [
            ...output.hsl().map(round),
            output.alpha(),
          ] as InputColor["color"],
        };
      }
      case "hsva": {
        const output = chroma.rgb(...color.color);
        return {
          type: "hsva",
          value: [
            ...output.hsv().map(round),
            output.alpha(),
          ] as InputColor["color"],
        };
      }
      case "rgba":
      default:
        return {
          type: "rgba",
          value: color.color,
        };
    }
  }, [color, colorSpace]);

  return (
    <p className="text-right text-xs font-mono w-100 pl-2 w-3/5">
      {convertedColor.type === "hex"
        ? convertedColor.value
        : convertedColor.value.join(", ")}
    </p>
  );
};

export default ColorValue;
