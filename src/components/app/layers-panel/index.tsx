import { FC } from "react";
import Panel from "../panel";
import CommandButtons from "./command-buttons";
import { GlobalBlendModeSelect } from "./blend-mode-select";
import GradientList from "./gradient-list";
import { ModeToggle } from "../mode-toggle";
import PresetSection from "./preset-section";

const LayersPanel: FC = () => {
  return (
    <Panel
      title="Gradients"
      className="top-3 left-3 z-10"
      extraContent={<ModeToggle />}
    >
      <PresetSection />
      <GlobalBlendModeSelect />
      <CommandButtons />
      <GradientList />
    </Panel>
  );
};

export default LayersPanel;
