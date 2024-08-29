import { FC, useCallback } from "react";
import { InputColor } from "@/state/types";
import { useSingleGradient } from "@/state/gradients.state";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPicker from "./color-picker";
import ColorValue from "./color-value";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit, Trash } from "lucide-react";
import { useAtomValue } from "jotai";
import { globalColorSpaceAtom } from "@/state/globalColorSpace.state";
import GenericButton from "@/components/ui/generic-button";

const ColorItem: FC<{
  gradientId: string;
  color: InputColor;
}> = ({ gradientId, color }) => {
  const [_, setGradient] = useSingleGradient(gradientId);
  const globalColorSpace = useAtomValue(globalColorSpaceAtom);

  const onChange = useCallback(
    (newColor: InputColor["color"]) => {
      setGradient((prev) => ({
        ...prev,
        colors: prev.colors.map((current) => {
          if (color.id === current.id) {
            return {
              ...current,
              color: newColor,
            };
          }
          return current;
        }),
      }));
    },
    [setGradient, gradientId]
  );

  return (
    <li className="w-full flex items-center pb-2 px-0 mx-0 justify-between">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="w-8 h-8 rounded cursor-pointer"
            style={{ backgroundColor: `rgba(${color.color.join(",")}` }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker value={color.color} onChange={onChange} />
        </PopoverContent>
      </Popover>
      <ColorValue color={color} colorSpace={globalColorSpace} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Popover>
              <PopoverTrigger asChild>
                <Edit className="mx-3 w-3 h-3" />
              </PopoverTrigger>
              <PopoverContent>
                <ColorPicker value={color.color} onChange={onChange} />
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent className="text-xs">Edit color</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <GenericButton
        title="Delete color"
        onClick={() => {
          setGradient((prev) => ({
            ...prev,
            colors: prev.colors.filter((c) => c.id !== color.id),
          }));
        }}
      >
        <Trash className="w-3 h-3 stroke-red-600" />
      </GenericButton>
    </li>
  );
};

export default ColorItem;
