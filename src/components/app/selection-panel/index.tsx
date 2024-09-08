import { FC } from "react";
import { useAtomValue } from "jotai";
import { selectedGradientAtom } from "@/state/gradient.store";
import SelectionPanelContent from "./selection-panel-content";

const SelectionPanel: FC = () => {
  const selectedGradient = useAtomValue(selectedGradientAtom);

  if (!selectedGradient) {
    return null;
  }

  return <SelectionPanelContent gradient={selectedGradient} />;
};

export default SelectionPanel;
