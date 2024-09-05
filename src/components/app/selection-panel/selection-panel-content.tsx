import { FC } from "react";
import Panel from "../panel";
import GradientTypeSelect from "./gradient-type-select";
import ColorsList from "./colors-list";
import CommandButtons from "./command-buttons";
import BlendModeSelect from "./blend-mode-select";
import ColorSpaceSelect from "./color-space-switch";
import ChromaSwitch from "./chroma-switch";
import { Separator } from "@/components/ui/separator";
import FieldsetLegend from "@/components/app/fieldset-legend";
import { useAtomValue } from "jotai";
import { gradientAliasFamily } from "../../../state/gradients.state";
import GradientProperties from "./gradient-properties";

const SelectionPanelContent: FC<{ gradientId: string }> = ({ gradientId }) => {
  const gradientAliasAtom = useAtomValue(gradientAliasFamily(gradientId));

  return (
    <Panel
      title={gradientAliasAtom.alias ?? "Selected gradient"}
      className="right-3 top-3 z-10"
    >
      <ColorSpaceSelect />
      <BlendModeSelect />
      <FieldsetLegend title="Colors">
        <CommandButtons />
        <ColorsList />
      </FieldsetLegend>
      <Separator className="mb-2" />
      <FieldsetLegend title="Properties">
        <GradientTypeSelect />
        <GradientProperties />
      </FieldsetLegend>
      <ChromaSwitch />
    </Panel>
  );
};

export default SelectionPanelContent;
