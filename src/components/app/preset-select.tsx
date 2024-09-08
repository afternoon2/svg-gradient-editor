import { FC, PropsWithChildren } from "react";
import { useAtom, useAtomValue } from "jotai";
import { presetsAtom, selectedPresetAtom } from "@/state/presets.state";
import SelectRow from "./select-row";

const PresetSelect: FC<PropsWithChildren> = ({ children }) => {
  const presets = useAtomValue(presetsAtom);
  const [selectedPreset, setSelectedPreset] = useAtom(selectedPresetAtom);

  const hasPresets = presets.length > 0;

  return (
    <SelectRow
      label="Selected preset"
      disabled={presets.length === 0}
      onValueChange={setSelectedPreset}
      value={selectedPreset ?? ""}
      placeholder={hasPresets ? "Select preset" : "No presets saved"}
      options={presets.map((preset) => ({
        id: preset.id,
        value: preset.name,
      }))}
    >
      {children}
    </SelectRow>
  );
};

export default PresetSelect;
