import { FC, useCallback, useContext } from "react";
import { InputColor } from "@/state/types";
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
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { globalColorSpaceAtom } from "@/state/globalColorSpace.state";
import GenericButton from "@/components/ui/generic-button";
import {
  gradientColorFamily,
  gradientColorIdsFamily,
} from "../../../state/gradients.store";
import { SelectionPanelContext } from "./context";

const ColorItem: FC<{ colorId: string }> = ({ colorId }) => {
  const { gradientId } = useContext(SelectionPanelContext);
  const setColorIds = useSetAtom(gradientColorIdsFamily(gradientId));
  const [colorAtomValue, setColorAtomValue] = useAtom(
    gradientColorFamily(colorId)
  );

  const globalColorSpace = useAtomValue(globalColorSpaceAtom);

  const onChange = useCallback(
    (newColor: InputColor["color"]) => {
      setColorAtomValue((prev) => ({
        ...prev,
        color: newColor,
      }));
    },
    [setColorAtomValue]
  );

  return (
    <li className="w-full flex items-center pb-2 px-0 mx-0 justify-between">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="w-8 h-8 rounded cursor-pointer"
            style={{
              backgroundColor: `rgba(${colorAtomValue.color.join(",")}`,
            }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker value={colorAtomValue.color} onChange={onChange} />
        </PopoverContent>
      </Popover>
      <ColorValue color={colorAtomValue} colorSpace={globalColorSpace} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Popover>
              <PopoverTrigger asChild>
                <Edit className="mx-3 w-3 h-3" />
              </PopoverTrigger>
              <PopoverContent>
                <ColorPicker value={colorAtomValue.color} onChange={onChange} />
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent className="text-xs">Edit color</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <GenericButton
        title="Delete color"
        onClick={() => {
          setColorIds((prev) => ({
            ...prev,
            colorIds: prev.colorIds.filter((cId) => cId !== colorAtomValue.id),
          }));
        }}
      >
        <Trash className="w-3 h-3 stroke-red-600" />
      </GenericButton>
    </li>
  );
};

export default ColorItem;
