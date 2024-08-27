import { FC } from "react";
import Panel from "../panel";
import CommandButtons from "./command-buttons";
import { GlobalBlendModeSelect } from "../blend-mode-select";
import GradientList from "./gradient-list";

const LayersPanel: FC = () => {
  return (
    <Panel title="Gradients" className="top-3 left-3 z-10">
      <GlobalBlendModeSelect />
      <CommandButtons />
      <GradientList />
    </Panel>
  );
};

export default LayersPanel;
