import { artboardSizeAtom } from "@/state/artboard.state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai";
import { FC } from "react";

const SizeControls: FC = () => {
  const [artboardSize, setArtboardSize] = useAtom(artboardSizeAtom);
  return (
    <div className="flex items-center gap-3 absolute z-10 top-3 px-4 py-3 bg-card border border-border rounded-lg shadow-lg dark:shadow-[0_4px_12px_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-1.5">
        <Label className="text-sm font-medium text-foreground">W</Label>
        <Input
          type="number"
          min={10}
          step={1}
          value={artboardSize[0]}
          className="w-[80px] h-9 px-2.5 text-sm"
          onChange={(event) => {
            setArtboardSize((prev) => [parseInt(event.target.value), prev[1]]);
          }}
        />
      </div>
      <span className="text-sm text-foreground/50">&times;</span>
      <div className="flex items-center gap-1.5">
        <Label className="text-sm font-medium text-foreground">H</Label>
        <Input
          type="number"
          min={10}
          step={1}
          value={artboardSize[1]}
          className="w-[80px] h-9 px-2.5 text-sm"
          onChange={(event) => {
            setArtboardSize((prev) => [prev[0], parseInt(event.target.value)]);
          }}
        />
      </div>
    </div>
  );
};

export default SizeControls;
