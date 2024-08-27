import { FC } from "react";
import Panel from "../panel";
import CommandButtons from "./command-buttons";

const LayersPanel: FC = () => {
  return (
    <Panel title="Layers" className="top-3 left-3 z-10">
      <CommandButtons />
    </Panel>
  );
};

export default LayersPanel;
