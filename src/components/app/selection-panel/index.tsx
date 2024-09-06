import { FC } from "react";
import { useAtomValue } from "jotai";
import { Gradient, gradientStateReducerAtom } from "@/state/gradient.store";
import SelectionPanelContent from "./selection-panel-content";

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
