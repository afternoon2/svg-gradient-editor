import { COLOR_SPACES, ColorSpace } from "@/state/types";
import { useAtom } from "jotai";
import { FC } from "react";
import { globalColorSpaceAtom } from "@/state/globalColorSpace.state";
import SelectRow from "../select-row";

const ColorSpaceSelect: FC = () => {
  const [colorSpace, setColorSpace] = useAtom(globalColorSpaceAtom);
  return (
    <SelectRow<ColorSpace>
      value={colorSpace}
      onValueChange={(value) => {
        setColorSpace(value as ColorSpace);
      }}
      label="Color space"
      options={COLOR_SPACES.map((space) => ({
        id: space,
        value: space,
      }))}
    />
  );
};

export default ColorSpaceSelect;
