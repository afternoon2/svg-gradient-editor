import { FC, useCallback } from "react";
import { useSingleGradient } from "@/state/gradients.state";
import GenericButton from "@/components/ui/generic-button";
import { randomChromaColor } from "../../../lib/gradient";
import { nanoid } from "nanoid";
import { PlusIcon, Trash } from "lucide-react";

const CommandButtons: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  const noColors = gradient.colors.length <= 0;

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
  }, [setGradient]);

  const deleteAllColors = useCallback(() => {
    setGradient((prev) => ({
      ...prev,
      colors: [],
    }));
  }, [setGradient]);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        <GenericButton onClick={addColor} title="Add color">
          <PlusIcon className="w-3 h-3" />
        </GenericButton>
      </div>
      <GenericButton
        onClick={deleteAllColors}
        disabled={noColors}
        title={noColors ? "No colors to delete" : "Delete all colors"}
      >
        <Trash className="w-3 h-3 stroke-red-500" />
      </GenericButton>
    </div>
  );
};

export default CommandButtons;
