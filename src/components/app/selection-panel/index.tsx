import { FC } from "react";
import { useAtomValue } from "jotai";
import { selectedGradientIdAtom } from "@/state/gradients.state";
import SelectionPanelContent from "./selection-panel-content";
import { SelectionPanelContext } from "./context";

const SelectionPanel: FC = () => {
  const selectedGradientId = useAtomValue(selectedGradientIdAtom);

  if (!selectedGradientId) {
    return null;
  }

  return (
    <SelectionPanelContext.Provider value={{ gradientId: selectedGradientId }}>
      <SelectionPanelContent gradientId={selectedGradientId} />;
    </SelectionPanelContext.Provider>
  );
};

export default SelectionPanel;
