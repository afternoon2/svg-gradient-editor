import { presetsAtom, selectedPresetIdAtom } from "@/state/presets.state";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import SelectRow from "@/components/app/select-row";
import { Preset } from "@/state/types";

const PresetSelect: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const presets = useAtomValue(presetsAtom);
  const setGlobalBlendMode = useSetAtom(globalBlendModeAtom);
  const [selectedPresetId, setSelectedPresetId] = useAtom(selectedPresetIdAtom);

  const hasPresets = presets.length > 0;

  const selectedPreset = useMemo(
    () =>
      selectedPresetId
        ? (presets.find((p) => p.id === selectedPresetId) as Preset)
        : undefined,
    [selectedPresetId, presets],
  );

  useEffect(() => {
    if (!!selectedPreset) {
      setGlobalBlendMode(selectedPreset.value.globalBlendMode);
      dispatch({
        type: "LOAD_GRADIENTS_FROM_STORAGE",
        payload: { gradients: selectedPreset.value.gradients },
      });
    }
  }, [selectedPreset, dispatch]);

  return (
    <SelectRow
      label="Selected preset"
      disabled={presets.length === 0}
      onValueChange={setSelectedPresetId}
      value={selectedPresetId ?? ""}
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
