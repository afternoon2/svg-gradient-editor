import { ColorSpace, InputColor } from "@/state/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FC, useCallback } from "react";
import ColorValue from "./color-value";
import ColorPicker from "./color-picker";
import { Edit } from "lucide-react";
import GenericButton from "@/components/ui/generic-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { useSingleGradient } from "@/state/gradients.state";

const ColorsListItem: FC<{
  color: InputColor;
  gradientId: string;
  colorSpace: ColorSpace;
}> = ({ color, gradientId, colorSpace }) => {
  const [_, setGradient] = useSingleGradient(gradientId);

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
    <li className="flex w-full items-center">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="w-10 h-10 rounded cursor-pointer"
            style={{ backgroundColor: `rgba(${color.color.join(",")}` }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker value={color.color} onChange={onChange} />
        </PopoverContent>
      </Popover>
      <ColorValue color={color} colorSpace={colorSpace} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Popover>
              <PopoverTrigger asChild>
                <Edit className="mx-3 w-4 h-4" />
              </PopoverTrigger>
              <PopoverContent>
                <ColorPicker value={color.color} onChange={onChange} />
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent>Edit color</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <GenericButton
        onClick={() => {
          setGradient((prev) => ({
            ...prev,
            colors: prev.colors.filter((c) => c.id !== color.id),
          }));
        }}
        tooltipText="Delete color"
      />
    </li>
  );
};

export default ColorsListItem;
