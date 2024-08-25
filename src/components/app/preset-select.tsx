import { useListContext } from "@/state/list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import { Label } from "@/components/ui/label";

const PresetSelect: FC = () => {
  const { state, dispatch } = useListContext();

  const hasPresets = state.presets.length > 0;

  return (
    <div className="flex w-full items-center">
      <Label className="mr-2">Selected preset:</Label>
      <Select
        disabled={state.presets.length === 0}
        onValueChange={(presetId: string) => {
          dispatch({ type: "SELECT_PRESET", payload: { id: presetId } });
        }}
        value={state.selectedPreset ?? undefined}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={hasPresets ? "Select preset" : "No presets saved"}
          />
        </SelectTrigger>
        <SelectContent>
          {state.presets.map((preset) => (
            <SelectItem key={preset.id} value={preset.name}>
              {preset.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PresetSelect;
