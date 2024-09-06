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
import { useSetAtom } from "jotai";
import GradientProperties, {
  LinearGradientProperties,
  RadialGradientProperties,
} from "./gradient-properties";
import { Gradient, gradientStateReducerAtom } from "@/state/gradient.store";
import ColorItem from "./color-item";

const SelectionPanelContent: FC<{ gradient: Gradient }> = ({ gradient }) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  return (
    <Panel
      title={gradient.alias ?? "Selected gradient"}
      className="right-3 top-3 z-10"
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
      <ChromaSwitch
        value={gradient.useChroma}
        onChange={(value) => {
          dispatch({
            type: "SET_CHROMA_USAGE",
            payload: {
              id: gradient.id,
              useChroma: value,
            },
          });
        }}
      />
    </Panel>
  );
};

export default SelectionPanelContent;
