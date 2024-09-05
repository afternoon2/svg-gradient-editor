import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gradient } from "@/state/types";
import { useAtom } from "jotai";
import { FC, useContext } from "react";
import { gradientTypeAtomFamily } from "@/state/gradients.state";
import { SelectionPanelContext } from "./context";

const OPTIONS: Gradient["type"][] = ["linear", "radial"];

const GradientTypeSelect: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const [gradientType, setGradientType] = useAtom(
    gradientTypeAtomFamily(gradientId)
  );

  return (
    <div className="w-full flex items-center py-2">
      <Label className="text-xs mr-3 w-1/3">Gradient type:</Label>
      <Select
        onValueChange={(value) => {
          setGradientType((prev) => ({
            ...prev,
            type: value as Gradient["type"],
          }));
        }}
        value={gradientType.type}
      >
        <SelectTrigger className="w-[110px] p-1 text-xs">
          <SelectValue placeholder="Select gradient type" />
        </SelectTrigger>
        <SelectContent>
          {OPTIONS.map((gType) => (
            <SelectItem key={gType} value={gType}>
              {gType}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GradientTypeSelect;
