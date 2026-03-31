import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPicker from "@/components/app/selection-panel/color-picker";
import ColorValue from "@/components/app/selection-panel/color-value";
import { globalColorSpaceAtom } from "@/state/globalColorSpace.state";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import GenericButton from "@/components/ui/generic-button";
import { useAtomValue, useSetAtom } from "jotai";
import { Edit, Trash } from "lucide-react";
import { AppColor } from "@/state/types";
import { FC, useCallback } from "react";
import chroma from "chroma-js";

const POPOVER_CLASSNAMES = "p-0 flex items-center justify-center max-w-[220px]";

const ColorItem: FC<{ color: AppColor; gradientId: string }> = ({
  color,
  gradientId,
}) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  const globalColorSpace = useAtomValue(globalColorSpaceAtom);

  const onChange = useCallback(
    (newColor: AppColor["value"]) => {
      dispatch({
        type: "SET_COLOR",
        payload: {
          gradientId,
          color: {
            ...color,
            value: newColor,
            css: chroma(newColor).css(),
          },
        },
      });
    },
    [dispatch, color],
  );

  return (
    <li className="w-full flex items-center pb-2 px-0 mx-0 justify-between overflow-hidden min-w-0">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="w-9 h-9 rounded-lg cursor-pointer shrink-0 border border-border"
            style={{
              backgroundColor: color.css,
            }}
          />
        </PopoverTrigger>
        <PopoverContent className={POPOVER_CLASSNAMES}>
          <ColorPicker value={color.value} onChange={onChange} />
        </PopoverContent>
      </Popover>
      <ColorValue color={color} colorSpace={globalColorSpace} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Popover>
              <PopoverTrigger asChild>
                <Edit className="mx-2 w-4 h-4 shrink-0" />
              </PopoverTrigger>
              <PopoverContent className={POPOVER_CLASSNAMES}>
                <ColorPicker value={color.value} onChange={onChange} />
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent className="text-xs">Edit color</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <GenericButton
        title="Delete color"
        onClick={() => {
          dispatch({
            type: "REMOVE_COLOR",
            payload: {
              gradientId,
              colorId: color.id,
            },
          });
        }}
      >
        <Trash className="w-4 h-4 shrink-0 stroke-red-600" />
      </GenericButton>
    </li>
  );
};

export default ColorItem;
