import { SliderProps } from "@radix-ui/react-slider";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FC } from "react";

const SliderRow: FC<
  Required<
    Pick<SliderProps, "min" | "max" | "step" | "onValueChange" | "value">
  > & {
    title: string;
  }
> = ({ min, max, step, onValueChange, value, title }) => (
  <div className="w-full flex flex-col gap-2 py-1.5">
    <div className="flex items-center justify-between">
      <Label className="text-sm font-medium text-foreground">{title}</Label>
      <Input
        type="number"
        className="w-[72px] h-8 px-2 text-sm text-right"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => {
          onValueChange([parseFloat(e.target.value)]);
        }}
      />
    </div>
    <Slider
      min={min}
      max={max}
      step={step}
      value={value}
      onValueChange={onValueChange}
    />
  </div>
);

export default SliderRow;
