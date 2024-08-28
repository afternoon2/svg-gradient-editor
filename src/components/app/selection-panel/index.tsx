import { FC } from "react";
import { useAtomValue } from "jotai";
import { selectedGradientIdAtom } from "@/state/gradients.state";
import SelectionPanelContent from "./selection-panel-content";

const SelectionPanel: FC = () => {
  const selectedGradientId = useAtomValue(selectedGradientIdAtom);

  if (!selectedGradientId) {
    return null;
  }

  return <SelectionPanelContent gradientId={selectedGradientId} />;
};

export default SelectionPanel;
