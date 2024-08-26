import { Gradient } from "@/state/types";
import { FC } from "react";
import GradientSection from "../gradient-section";
import { useListContext } from "@/state/list";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OPTIONS: Gradient["type"][] = ["linear", "radial"];

const GradientTypeSection: FC<{ gradient: Gradient }> = ({ gradient }) => {
  const { dispatch } = useListContext();
  return (
    <GradientSection title="Type">
      <Select
        onValueChange={(gradientType: string) => {
          dispatch({
            type: "SET_GRADIENT_TYPE",
            payload: {
              gradientId: gradient.id,
              gradientType: gradientType as Gradient["type"],
            },
          });
        }}
        value={gradient.type}
      >
        <SelectTrigger className="w-[180px]">
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
    </GradientSection>
  );
};

export default GradientTypeSection;
