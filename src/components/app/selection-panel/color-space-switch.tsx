import { globalColorSpaceAtom } from "@/state/globalColorSpace.state";
import { COLOR_SPACES, ColorSpace } from "@/state/types";
import SelectRow from "@/components/app/select-row";
import { useAtom } from "jotai";
import { FC } from "react";

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
        label: space
      }))}
    />
  );
};

export default ColorSpaceSelect;
