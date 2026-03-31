import { RgbaColorPicker } from "react-colorful";
import { AppColor } from "@/state/types";
import { FC, useState } from "react";

const ColorPicker: FC<{
  value: AppColor["value"];
  onChange: (newColor: AppColor["value"]) => void;
}> = ({ value, onChange }) => {
  const [currentColor, setCurrentColor] = useState({
    r: value[0],
    g: value[1],
    b: value[2],
    a: value[3],
  });

  return (
    <RgbaColorPicker
      color={currentColor}
      onChange={(color) => {
        setCurrentColor(color);
      }}
      onPointerUp={() => {
        onChange([currentColor.r, currentColor.g, currentColor.b, currentColor.a]);
      }}
    />
  );
};

export default ColorPicker;
