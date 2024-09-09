import DownloadSection from "@/components/app/layers-panel/download-section";
import CommandButtons from "@/components/app/layers-panel/command-buttons";
import PresetSection from "@/components/app/layers-panel/preset-section";
import GradientList from "@/components/app/layers-panel/gradient-list";
import RepoLink from "@/components/app/layers-panel/repo-link";
import { GlobalBlendModeSelect } from "./blend-mode-select";
import { ModeToggle } from "@/components/app/mode-toggle";
import Panel from "@/components/app/panel";
import { FC } from "react";

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
