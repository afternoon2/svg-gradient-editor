import { Input } from "@/components/ui/input";

import { useAtom } from "jotai";
import { FC } from "react";
import { artboardSizeAtom } from "@/state/artboard.state";

const SizeControls: FC = () => {
  const [artboardSize, setArtboardSize] = useAtom(artboardSizeAtom);
  return (
    <div className="flex items-center absolute z-10 top-2 p-4 bg-background rounded shadow-lg ">
      <Input
        type="number"
        min={10}
        step={1}
        value={artboardSize[0]}
        className="w-[100px]"
        onChange={(event) => {
          setArtboardSize((prev) => [parseInt(event.target.value), prev[1]]);
        }}
      />
      <span className="px-2">x</span>
      <Input
        type="number"
        min={10}
        step={1}
        value={artboardSize[1]}
        className="w-[100px]"
        onChange={(event) => {
          setArtboardSize((prev) => [prev[0], parseInt(event.target.value)]);
        }}
      />
    </div>
  );
};

export default SizeControls;
