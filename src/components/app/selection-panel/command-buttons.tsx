import { FC, useCallback, useContext } from "react";
import GenericButton from "@/components/ui/generic-button";
import { nanoid } from "nanoid";
import { PlusIcon, Trash } from "lucide-react";
import { SelectionPanelContext } from "./context";
import { useAtom } from "jotai";
import { gradientColorIdsFamily } from "@/state/gradients.store";

const CommandButtons: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const [colorIdsAtom, setColorIdsAtom] = useAtom(
    gradientColorIdsFamily(gradientId)
  );

  const noColors = colorIdsAtom.colorIds.length <= 0;

  const addColor = useCallback(() => {
    setColorIdsAtom((prev) => ({
      ...prev,
      colorIds: [...prev.colorIds, nanoid()],
    }));
  }, [setColorIdsAtom]);

  const deleteAllColors = useCallback(() => {
    setColorIdsAtom((prev) => ({
      ...prev,
      colorIds: [],
    }));
  }, [setColorIdsAtom]);

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
