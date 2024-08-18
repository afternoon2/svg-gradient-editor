import { BLEND_MODES, BlendMode } from "@/state/types";
import { FC } from "react";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  Select,
  SelectItem,
} from "@/components/ui/select";
import { useListContext } from "@/state/list";
import { Label } from "./ui/label";

const BlendModeSelect: FC<{
  blendMode: BlendMode;
  onChange: (newBlendMode: BlendMode) => void;
}> = ({ blendMode, onChange }) => (
  <div className="flex w-flex items-center">
    <Label className="mr-2">Global blend mode:</Label>
    <Select
      onValueChange={(value: string) => {
        onChange(value as BlendMode);
      }}
      value={blendMode}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {BLEND_MODES.map((mode) => (
          <SelectItem key={mode} value={mode}>
            {mode}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export const GlobalBlendModeSelect: FC = () => {
  const { state, dispatch } = useListContext();

  return (
    <BlendModeSelect
      blendMode={state.globalBlendMode}
      onChange={(blendMode: BlendMode) => {
        dispatch({ type: "SET_GLOBAL_BLEND_MODE", payload: { blendMode } });
      }}
    />
  );
};
