import { useAtom } from "jotai";
import { FC } from "react";
import { globalBlendModeAtom } from "@/state/globalBlendMode.state";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BLEND_MODES, BlendMode } from "@/state/types";
import { BlendIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BlendModeDropdown: FC = () => {
  const [blendMode, setBlendMode] = useAtom(globalBlendModeAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <BlendIcon className="w-3 h-3" />
            </TooltipTrigger>
            <TooltipContent>Selected blend mode: {blendMode}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Global blend mode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={blendMode}
          onValueChange={(value) => {
            setBlendMode(value as BlendMode);
          }}
        >
          {BLEND_MODES.map((blendMode) => (
            <DropdownMenuRadioItem key={blendMode} value={blendMode}>
              {blendMode}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BlendModeDropdown;
