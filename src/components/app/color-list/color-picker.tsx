import { InputColor } from "@/state/types";
import { FC, useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker: FC<{
  value: InputColor["color"];
  onChange: (newColor: InputColor["color"]) => void;
}> = ({ value, onChange }) => {
  const [currentColor, setCurrentColor] = useState(value);

  return (
    <SketchPicker
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
