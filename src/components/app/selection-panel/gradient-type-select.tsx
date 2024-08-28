import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gradient } from "@/state/types";
import { FC } from "react";

const OPTIONS: Gradient["type"][] = ["linear", "radial"];

const GradientTypeSelect: FC<{
  gradientType: Gradient["type"];
  setGradientType: (gradient: Gradient["type"]) => void;
}> = ({ gradientType, setGradientType }) => {
  return (
    <div className="w-full flex items-center">
      <Label className="text-xs mr-3">Gradient type:</Label>
      <Select onValueChange={setGradientType} value={gradientType}>
        <SelectTrigger className="w-[110px] p-1 text-xs">
          <SelectValue placeholder="Select gradient type" />
        </SelectTrigger>
        <SelectContent>
          {OPTIONS.map((gradientType) => (
            <SelectItem key={gradientType} value={gradientType}>
              {gradientType}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GradientTypeSelect;
