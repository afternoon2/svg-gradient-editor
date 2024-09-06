import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GradientType } from "@/state/types";
import { useSetAtom } from "jotai";
import { FC } from "react";
import { gradientStateReducerAtom } from "@/state/gradient.store";

const OPTIONS: GradientType[] = ["linear", "radial"];

const GradientTypeSelect: FC<{ type: GradientType; gradientId: string }> = ({
  type,
  gradientId,
}) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  return (
    <div className="w-full flex items-center py-2">
      <Label className="text-xs mr-3 w-1/3">Gradient type:</Label>
      <Select
        onValueChange={(value) => {
          dispatch({
            type: "SET_GRADIENT_TYPE",
            payload: {
              id: gradientId,
              type: value as GradientType,
            },
          });
        }}
        value={type}
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
