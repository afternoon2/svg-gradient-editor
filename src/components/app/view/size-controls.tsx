import { Input } from "@/components/ui/input";

import { artboardSizeAtom } from "@/state/artboard.state";
import { useAtom } from "jotai";
import { FC } from "react";

const SizeControls: FC = () => {
  const [artboardSize, setArtboardSize] = useAtom(artboardSizeAtom);
  return (
    <div className="flex items-center absolute z-10 top-2 p-2 bg-background rounded-lg shadow-lg ">
      <Input
        type="number"
        min={10}
        step={1}
        value={artboardSize[0]}
        className="w-[100px] text-xs p-1"
        onChange={(event) => {
          setArtboardSize((prev) => [parseInt(event.target.value), prev[1]]);
        }}
      />
      <span className="px-1 text-xs">x</span>
      <Input
        type="number"
        min={10}
        step={1}
        value={artboardSize[1]}
        className="w-[100px] text-xs p-1"
        onChange={(event) => {
          setArtboardSize((prev) => [prev[0], parseInt(event.target.value)]);
        }}
      />
    </div>
  );
};

export default SizeControls;
