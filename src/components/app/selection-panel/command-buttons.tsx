import { gradientStateReducerAtom, randomColor } from "@/state/gradient.store";
import { Button } from "@/components/ui/button";
import { PlusIcon, Trash } from "lucide-react";
import { AppColor } from "@/state/types";
import { FC, useCallback } from "react";
import { useSetAtom } from "jotai";

const CommandButtons: FC<{ gradientId: string; colors: AppColor[] }> = ({ gradientId, colors }) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  const noColors = colors.length <= 0;

  const addColor = useCallback(() => {
    dispatch({
      type: "ADD_COLOR",
      payload: {
        color: randomColor(),
        gradientId,
      },
    });
  }, [dispatch, gradientId]);

  const deleteAllColors = useCallback(() => {
    dispatch({
      type: "REMOVE_ALL_COLORS",
      payload: {
        gradientId,
      },
    });
  }, [dispatch, gradientId]);

  return (
    <div className="w-full flex items-center gap-2">
      <Button onClick={addColor} variant="outline" size="sm" className="flex-1">
        <PlusIcon className="w-4 h-4 mr-1" />
        Add Color
      </Button>
      <Button
        onClick={deleteAllColors}
        disabled={noColors}
        variant="outline"
        size="sm"
        title={noColors ? "No colors to delete" : "Delete all colors"}
      >
        <Trash className="w-4 h-4 stroke-red-500" />
      </Button>
    </div>
  );
};

export default CommandButtons;
