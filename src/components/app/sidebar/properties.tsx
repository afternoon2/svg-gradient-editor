import {
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
import GradientTypeSelect from "@/components/app/selection-panel/gradient-type-select";
import ShapeProperties from "@/components/app/selection-panel/shape-properties";
import ShapeSelect from "@/components/app/selection-panel/shape-select";
import Properties from "@/components/app/selection-panel/properties";
import FieldsetLegend from "@/components/app/fieldset-legend";
import { selectedGradientAtom } from "@/state/gradient.store";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useAtomValue } from "jotai";
import { FC } from "react";

const SidebarProperties: FC = () => {
  const gradient = useAtomValue(selectedGradientAtom);

  if (!gradient) {
    return (
      <Label className="text-muted-foreground text-sm">
        Select a gradient to edit its properties
      </Label>
    );
  }

  return (
    <div className="flex flex-col gap-2">
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
      <Separator variant="gradient" />
      <FieldsetLegend title="Properties">
        <GradientTypeSelect type={gradient.type} gradientId={gradient.id} />
        <SpreadMethodSelect />
        <Properties>
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
        </Properties>
        <ShapeSelect />
        <Properties>
          <ShapeProperties />
        </Properties>
      </FieldsetLegend>
      <FieldsetLegend title="Advanced settings">
        <ChromaProperties />
      </FieldsetLegend>
      <ChromaListener />
    </div>
  );
};

export default SidebarProperties;
