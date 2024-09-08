import { BLEND_MODES, BlendMode } from "@/state/types";
import { FC } from "react";
import { useAtom } from "jotai";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import SelectRow from "../select-row";

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
