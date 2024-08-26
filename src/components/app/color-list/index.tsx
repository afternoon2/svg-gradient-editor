import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColorSpace } from "@/state/types";
import { PlusIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { FC, useCallback, useState } from "react";
import ColorsListItem from "./colors-list-item";
import ColorSpaceSwitch from "./color-space-switch";
import DeleteButton from "@/components/ui/delete-button";
import GradientSection from "../gradient-section";
import { randomChromaColor } from "@/lib/gradient";
import { useSingleGradient } from "@/state/gradients.state";

const ColorList: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);
  const [colorSpace, setColorSpace] = useState<ColorSpace>("rgba");

  const { id } = gradient;

  const addColor = useCallback(() => {
    setGradient((prev) => ({
      ...prev,
      colors: [
        ...prev.colors,
        {
          id: nanoid(),
          color: randomChromaColor(),
        },
      ],
    }));
  }, [setGradient, id]);

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
              setGradient((prev) => ({
                ...prev,
                colors: [],
              }));
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
