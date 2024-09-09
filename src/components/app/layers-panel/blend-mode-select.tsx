import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import { BLEND_MODES, BlendMode } from "@/state/types";
import SelectRow from "@/components/app/select-row";
import { useAtom } from "jotai";
import { FC } from "react";

export const GlobalBlendModeSelect: FC = () => {
  const [blendMode, setBlendMode] = useAtom(globalBlendModeAtom);

  return (
    <SelectRow<BlendMode>
      value={blendMode}
      onValueChange={(blendMode: BlendMode) => {
        setBlendMode(blendMode);
      }}
      options={BLEND_MODES.map((blendMode) => ({
        id: blendMode,
        value: blendMode,
      }))}
      label="Global blend mode"
    />
  );
};
