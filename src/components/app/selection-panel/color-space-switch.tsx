import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COLOR_SPACES, ColorSpace } from "@/state/types";
import { useAtom } from "jotai";
import { FC } from "react";
import { globalColorSpaceAtom } from "@/state/globalColorSpace.state";
import { Label } from "@/components/ui/label";

const ColorSpaceSwitch: FC = () => {
  const [colorSpace, setColorSpace] = useAtom(globalColorSpaceAtom);
  return (
    <div className="w-full flex items-center pb-1">
      <Label className="text-xs mr-3 w-1/3">Color space:</Label>
      <Select
        value={colorSpace}
        onValueChange={(value: string) => {
          setColorSpace(value as ColorSpace);
        }}
      >
        <SelectTrigger className="w-[110px] p-1 text-xs">
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
