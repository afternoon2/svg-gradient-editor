import { FC, useContext } from "react";
import { SelectionPanelContext } from "./context";
import { useAtomValue } from "jotai";
import { gradientColorIdsFamily } from "@/state/gradients.state";
import ColorItem from "./color-item";

const ColorsList: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const colorIdsAtom = useAtomValue(gradientColorIdsFamily(gradientId));

  console.log(colorIdsAtom);

  return (
    <ul className="w-full flex flex-col max-h-[200px] overflow-y-auto pt-2">
      {colorIdsAtom.colorIds.map((colorId) => (
        <ColorItem key={colorId} colorId={colorId} />
      ))}
    </ul>
  );
};

export default ColorsList;
