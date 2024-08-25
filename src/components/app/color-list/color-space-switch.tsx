import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COLOR_SPACES, ColorSpace } from "@/state/types";
import { FC } from "react";

const ColorSpaceSwitch: FC<{
  colorSpace: ColorSpace;
  onChange: (newSpace: ColorSpace) => void;
}> = ({ colorSpace, onChange }) => {
  return (
    <div className="flex items-center">
      <Select
        value={colorSpace}
        onValueChange={(value: string) => {
          onChange(value as ColorSpace);
        }}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {COLOR_SPACES.map((space) => (
            <SelectItem key={space} value={space}>
              {space}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ColorSpaceSwitch;
