import GradientProperties, {
  LinearGradientProperties,
  RadialGradientProperties,
} from "@/components/app/selection-panel/gradient-properties";
import SpreadMethodSelect from "@/components/app/selection-panel/spread-method-select";
import ColorSpaceSelect from "@/components/app/selection-panel/color-space-switch";
import ChromaProperties from "@/components/app/selection-panel/chroma-properties";
import BlendModeSelect from "@/components/app/selection-panel/blend-mode-select";
import CommandButtons from "@/components/app/selection-panel/command-buttons";
import ChromaListener from "@/components/app/selection-panel/chroma-listener";
import ColorsList from "@/components/app/selection-panel/colors-list";
import ColorItem from "@/components/app/selection-panel/color-item";
import FieldsetLegend from "@/components/app/fieldset-legend";
import GradientTypeSelect from "./gradient-type-select";
import { Separator } from "@/components/ui/separator";
import Panel from "@/components/app/panel";
import { Gradient } from "@/state/types";
import { FC } from "react";

const SelectionPanelContent: FC<{ gradient: Gradient }> = ({ gradient }) => {
  return (
    <Panel
      title={gradient.alias || "Selected gradient"}
      className="top-3 right-3 z-10"
    >
      <ColorSpaceSelect />
      <BlendModeSelect />
      <FieldsetLegend title="Colors">
        <CommandButtons gradientId={gradient.id} colors={gradient.input} />
        <ColorsList>
          {gradient.input.map((color) => (
            <ColorItem key={color.id} color={color} gradientId={gradient.id} />
          ))}
        </ColorsList>
      </FieldsetLegend>
      <Separator className="mb-2" />
      <FieldsetLegend title="Properties">
        <GradientTypeSelect type={gradient.type} gradientId={gradient.id} />
        <SpreadMethodSelect />
        <GradientProperties>
          {gradient.type === "linear" && (
            <LinearGradientProperties
              gradientId={gradient.id}
              attrs={gradient.linearAttributes}
            />
          )}
          {gradient.type === "radial" && (
            <RadialGradientProperties
              gradientId={gradient.id}
              attrs={gradient.radialAttributes}
            />
          )}
        </GradientProperties>
      </FieldsetLegend>
      <FieldsetLegend title="Advanced settings">
        <ChromaProperties />
      </FieldsetLegend>
      <ChromaListener />
    </Panel>
  );
};

export default SelectionPanelContent;
