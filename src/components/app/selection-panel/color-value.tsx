import { AppColor, ColorSpace } from "@/state/types";
import { FC, useMemo } from "react";
import chroma from "chroma-js";

type Output =
  | { type: "rgba"; value: AppColor["value"] }
  | { type: "hsva"; value: AppColor["value"] }
  | { type: "hsla"; value: AppColor["value"] }
  | { type: "hex"; value: string };

const round = (v: number): number => parseFloat(v.toFixed(2));

const ColorValue: FC<{ color: AppColor; colorSpace: ColorSpace }> = ({
  color,
  colorSpace,
}) => {
  const convertedColor: Output = useMemo(() => {
    switch (colorSpace) {
      case "hex":
        return {
          type: "hex",
          value: chroma.rgb(...color.value).hex(),
        };
      case "hsla": {
        const output = chroma.rgb(...color.value);
        return {
          type: "hsla",
          value: [...output.hsl().map(round)] as AppColor["value"],
        };
      }
      case "hsva": {
        const output = chroma.rgb(...color.value);
        return {
          type: "hsva",
          value: [
            ...output.hsv().map(round),
            output.alpha(),
          ] as AppColor["value"],
        };
      }
      case "rgba":
      default:
        return {
          type: "rgba",
          value: color.value,
        };
    }
  }, [color, colorSpace]);

  return (
    <p className="text-right text-xs w-100 pl-2 w-3/5">
      {convertedColor.type === "hex"
        ? convertedColor.value
        : convertedColor.value.join(", ")}
    </p>
  );
};

export default ColorValue;
