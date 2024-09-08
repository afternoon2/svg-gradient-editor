import { themeAtom } from "@/state/theme.state";
import { AppColor } from "@/state/types";
import { useAtomValue } from "jotai";
import { FC, useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker: FC<{
  value: AppColor["value"];
  onChange: (newColor: AppColor["value"]) => void;
}> = ({ value, onChange }) => {
  const [currentColor, setCurrentColor] = useState(value);
  const theme = useAtomValue(themeAtom);

  return (
    <SketchPicker
      styles={{
        default: {
          picker: {
            backgroundColor: theme === "dark" ? "var(--background)" : "",
            color: "black",
            boxShadow: "none",
          },
          color: {
            color: "black",
          },
        },
      }}
      color={{
        r: currentColor[0],
        g: currentColor[1],
        b: currentColor[2],
        a: currentColor[3],
      }}
      onChange={(color) => {
        setCurrentColor([
          color.rgb.r,
          color.rgb.g,
          color.rgb.b,
          color.rgb.a as number,
        ]);
      }}
      onChangeComplete={(color) => {
        onChange([
          color.rgb.r,
          color.rgb.g,
          color.rgb.b,
          color.rgb.a as number,
        ]);
      }}
    />
  );
};

export default ColorPicker;
