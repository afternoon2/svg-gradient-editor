import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { BLEND_MODES, BlendMode } from "@/state/types";
import SelectRow from "@/components/app/select-row";
import { useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";

const BlendModeSelect: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const selectedGradient = useAtomValue(selectedGradientAtom);

  return (
    <SelectRow<BlendMode>
      label="Blend mode"
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
      options={BLEND_MODES.map((blendMode) => ({
        id: blendMode,
        value: blendMode,
        label: blendMode,
      }))}
    />
  );
};

export default BlendModeSelect;
