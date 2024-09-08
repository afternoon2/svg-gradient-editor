import { SliderProps } from "@radix-ui/react-slider";
import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const SliderRow: FC<
  Required<
    Pick<SliderProps, "min" | "max" | "step" | "onValueChange" | "value">
  > & {
    title: string;
  }
> = ({ min, max, step, onValueChange, value, title }) => (
  <div className="w-full flex items-center mb-2">
    <Label className="text-xs mr-1 w-[40px]">{title}</Label>
    <Input
      type="number"
      className="w-[80px] h-[20px] mx-2 p-3 text-xs"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => {
        onValueChange([parseFloat(e.target.value)]);
      }}
    />
    <Slider
      className="h-[10px]"
      min={min}
      max={max}
      step={step}
      value={value}
      onValueChange={onValueChange}
    />
  </div>
);

export default SliderRow;
