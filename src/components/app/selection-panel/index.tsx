import SelectionPanelContent from "@/components/app/selection-panel/selection-panel-content";
import { selectedGradientAtom } from "@/state/gradient.store";
import { useAtomValue } from "jotai";
import { FC } from "react";

const SelectionPanel: FC = () => {
  const selectedGradient = useAtomValue(selectedGradientAtom);

  if (!selectedGradient) {
    return null;
  }

  return <SelectionPanelContent gradient={selectedGradient} />;
};

export default SelectionPanel;
