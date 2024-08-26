import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import { Label } from "@/components/ui/label";
import { useAtom, useAtomValue } from "jotai";
import { presetsAtom, selectedPresetAtom } from "@/state/presets.state";

const PresetSelect: FC = () => {
  const presets = useAtomValue(presetsAtom);
  const [selectedPreset, setSelectedPreset] = useAtom(selectedPresetAtom);

  const hasPresets = presets.length > 0;

  return (
    <div className="flex w-full items-center">
      <Label className="mr-2">Selected preset:</Label>
      <Select
        disabled={presets.length === 0}
        onValueChange={(presetId: string) => {
          setSelectedPreset(presetId);
        }}
        value={selectedPreset}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={hasPresets ? "Select preset" : "No presets saved"}
          />
        </SelectTrigger>
        <SelectContent>
          {presets.map((preset) => (
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
