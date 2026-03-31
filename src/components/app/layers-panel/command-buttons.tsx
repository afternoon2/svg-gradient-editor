import {
  gradientStateReducerAtom,
  randomGradient,
} from "@/state/gradient.store";
import { selectedPresetIdAtom } from "@/state/presets.state";
import { artboardSizeAtom } from "@/state/artboard.state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { PlusIcon, Trash } from "lucide-react";
import { FC, useCallback } from "react";

const CommandButtons: FC = () => {
  const [state, dispatch] = useAtom(gradientStateReducerAtom);
  const setSelectedPresetId = useSetAtom(selectedPresetIdAtom);
  const artboardSize = useAtomValue(artboardSizeAtom);

  const noGradients = state.gradients.length <= 0;

  const addGradient = useCallback(() => {
    if (state.gradients.length === 0) {
      setSelectedPresetId(undefined);
    }
    dispatch({
      type: "ADD_GRADIENT",
      payload: { gradient: randomGradient(artboardSize) },
    });
  }, [dispatch, artboardSize]);

  return (
    <div className="w-full flex items-center gap-2">
      <Button
        onClick={addGradient}
        variant="outline"
        size="sm"
        className="flex-1"
      >
        <PlusIcon className="w-4 h-4 mr-1" />
        Add Gradient
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: "REMOVE_ALL_GRADIENTS" });
        }}
        disabled={noGradients}
        variant="outline"
        size="sm"
        title={noGradients ? "No gradients to delete" : "Delete all gradients"}
      >
        <Trash className="w-4 h-4 stroke-red-500" />
      </Button>
    </div>
  );
};

export default CommandButtons;
