import { FC, useCallback } from "react";
import GenericButton from "@/components/ui/generic-button";
import { PlusIcon, Trash } from "lucide-react";
import { useSetAtom } from "jotai";
import { AppColor } from "@/state/types";
import { gradientStateReducerAtom, randomColor } from "@/state/gradient.store";

const CommandButtons: FC<{ gradientId: string; colors: AppColor[] }> = ({
  gradientId,
  colors,
}) => {
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
