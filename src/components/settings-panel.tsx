import { FC } from "react";
import Aside from "./aside";
import PresetSelect from "./preset-select";
import { Separator } from "./ui/separator";
import { GlobalBlendModeSelect } from "./blend-mode-select";
import AddDelete from "./add-delete";
import GradientList from "./app/gradient-list";

const SettingsPanel: FC = () => (
  <Aside>
    <Aside.Header>
      <Aside.Row>
        <PresetSelect />
      </Aside.Row>
      <Aside.Row>
        <GlobalBlendModeSelect />
      </Aside.Row>
      <Aside.Row>
        <AddDelete />
      </Aside.Row>
      <Aside.Row>
        <Separator />
      </Aside.Row>
    </Aside.Header>
    <GradientList />
  </Aside>
);

export default SettingsPanel;
