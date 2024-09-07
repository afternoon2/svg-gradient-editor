import { FC } from "react";
import { useAtomValue } from "jotai";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import SelectionPanelContent from "./selection-panel-content";
import { Gradient } from "@/state/types";

const SelectionPanel: FC = () => {
  const state = useAtomValue(gradientStateReducerAtom);

  if (!state.selectedGradientId) {
    return null;
  }

  return (
    <SelectionPanelContent
      gradient={
        state.gradients.find(
          (g) => g.id === state.selectedGradientId
        ) as Gradient
      }
    />
  );
};

export default SelectionPanel;
