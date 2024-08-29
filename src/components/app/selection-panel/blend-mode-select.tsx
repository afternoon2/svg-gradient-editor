import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BLEND_MODES, BlendMode } from "@/state/types";
import { FC } from "react";
import { Label } from "@/components/ui/label";
import { useSingleGradient } from "@/state/gradients.state";

const BlendModeSelect: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  return (
    <div className="w-full flex items-center pb-1">
      <Label className="text-xs mr-3 w-1/3">Blend mode:</Label>
      <Select
        value={gradient.blendMode.mode}
        onValueChange={(value: string) => {
          setGradient((prev) => ({
            ...prev,
            blendMode: {
              ...prev.blendMode,
              mode: value as BlendMode,
            },
          }));
        }}
      >
        <SelectTrigger className="w-[110px] p-1 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {BLEND_MODES.map((mode) => (
            <SelectItem key={mode} value={mode}>
              {mode}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlendModeSelect;
