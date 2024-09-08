import { FC } from "react";
import Panel from "../panel";
import CommandButtons from "./command-buttons";
import { GlobalBlendModeSelect } from "./blend-mode-select";
import GradientList from "./gradient-list";
import { ModeToggle } from "../mode-toggle";
import PresetSection from "./preset-section";
import DownloadSection from "./download-section";
import RepoLink from "./repo-link";

const LayersPanel: FC = () => {
  return (
    <Panel
      title="Gradients"
      className="top-3 left-3 z-10"
      extraContent={
        <div className="flex items-center">
          <RepoLink />
          <DownloadSection />
          <ModeToggle />
        </div>
      }
    >
      <PresetSection />
      <GlobalBlendModeSelect />
      <CommandButtons />
      <GradientList />
    </Panel>
  );
};

export default LayersPanel;
