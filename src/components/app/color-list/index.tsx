import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useListContext } from "@/state/list";
import { ColorSpace, Gradient } from "@/state/types";
import chroma from "chroma-js";
import { PlusIcon, Trash } from "lucide-react";
import { nanoid } from "nanoid";
import { FC, useCallback, useState } from "react";
import ColorsListItem from "./colors-list-item";
import ColorSpaceSwitch from "./color-space-switch";

const ColorList: FC<{ gradient: Gradient }> = ({ gradient }) => {
  const [colorSpace, setColorSpace] = useState<ColorSpace>("rgba");
  const { dispatch } = useListContext();

  const { id } = gradient;

  const addColor = useCallback(() => {
    dispatch({
      type: "ADD_COLOR",
      payload: {
        gradientId: id,
        color: {
          id: nanoid(),
          color: chroma.random().rgba(),
        },
      },
    });
  }, [dispatch, id]);

  return (
    <fieldset className="flex flex-col gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm">Colors</legend>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="link"
                  size="sm"
                  onClick={addColor}
                  className="pl-2"
                >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add color</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_ALL_COLORS",
                      payload: {
                        gradientId: gradient.id,
                      },
                    });
                  }}
                  disabled={gradient.colors.length === 0}
                >
                  <Trash className="stroke-red-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete all colors</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ColorSpaceSwitch colorSpace={colorSpace} onChange={setColorSpace} />
      </div>
      <ul className="flex w-full flex-col items-center list-none flex-wrap gap-2">
        {gradient.colors.map((color) => (
          <ColorsListItem
            color={color}
            gradientId={gradient.id}
            key={color.id}
            colorSpace={colorSpace}
          />
        ))}
      </ul>
    </fieldset>
  );
};

export default ColorList;
