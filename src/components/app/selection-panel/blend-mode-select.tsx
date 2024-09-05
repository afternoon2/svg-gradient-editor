import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BLEND_MODES, BlendMode } from "@/state/types";
import { FC, useContext } from "react";
import { Label } from "@/components/ui/label";
import { SelectionPanelContext } from "./context";
import { useAtom } from "jotai";
import { gradientBlendModeFamily } from "../../../state/gradients.state";

const BlendModeSelect: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const [blendModeAtom, setBlendModeAtom] = useAtom(
    gradientBlendModeFamily(gradientId)
  );

  return (
    <div className="w-full flex items-center pb-1">
      <Label className="text-xs mr-3 w-1/3">Blend mode:</Label>
      <Select
        value={blendModeAtom.blendMode}
        onValueChange={(value: string) => {
          setBlendModeAtom((prev) => ({
            ...prev,
            blendMode: value as BlendMode,
          }));
        }}
      >
        <SelectTrigger className="w-[110px] p-1 text-xs">
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
};

export default BlendModeSelect;
