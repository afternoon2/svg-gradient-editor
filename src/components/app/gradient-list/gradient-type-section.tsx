import { Gradient } from "@/state/types";
import { FC } from "react";
import GradientSection from "../gradient-section";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSingleGradient } from "@/state/gradients.state";
import {
  getDefaultLinearGradientAttributes,
  getDefaultRadialGradientAttributes,
} from "@/lib/gradient";

const OPTIONS: Gradient["type"][] = ["linear", "radial"];

const GradientTypeSection: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);
  return (
    <GradientSection title="Type">
      <Select
        onValueChange={(gradientType: string) => {
          setGradient(
            (prev) =>
              ({
                ...prev,
                type: gradientType as Gradient["type"],
                attributes:
                  gradientType === "linear"
                    ? getDefaultLinearGradientAttributes()
                    : getDefaultRadialGradientAttributes(),
              } as Gradient)
          );
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
