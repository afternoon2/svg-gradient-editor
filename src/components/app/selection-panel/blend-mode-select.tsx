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
import { useAtomValue, useSetAtom } from "jotai";
import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";

const BlendModeSelect: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const selectedGradient = useAtomValue(selectedGradientAtom);

  return (
    <div className="w-full flex items-center pb-1">
      <Label className="text-xs mr-3 w-1/3">Blend mode:</Label>
      <Select
        value={selectedGradient?.blendMode ?? "normal"}
        onValueChange={(value: string) => {
          dispatch({
            type: "SET_BLEND_MODE",
            payload: {
              id: selectedGradient?.id as string,
              blendMode: value as BlendMode,
            },
          });
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
