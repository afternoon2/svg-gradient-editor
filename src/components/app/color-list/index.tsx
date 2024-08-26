import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useListContext } from "@/state/list";
import { ColorSpace, Gradient } from "@/state/types";
import { PlusIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { FC, useCallback, useState } from "react";
import ColorsListItem from "./colors-list-item";
import ColorSpaceSwitch from "./color-space-switch";
import DeleteButton from "@/components/ui/delete-button";
import GradientSection from "../gradient-section";
import { randomChromaColor } from "@/lib/gradient";

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
          color: randomChromaColor(),
        },
      },
    });
  }, [dispatch, id]);

  return (
    <GradientSection title="Colors">
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
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add color</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DeleteButton
            onClick={() => {
              dispatch({
                type: "DELETE_ALL_COLORS",
                payload: {
                  gradientId: gradient.id,
                },
              });
            }}
            tooltipText="Delete all colors"
            disabled={gradient.colors.length === 0}
          />
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
    </GradientSection>
  );
};

export default ColorList;
