import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSingleGradient } from "@/state/gradients.state";
import { FC } from "react";

const ChromaSwitch: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  return (
    <div className="w-full flex items-center">
      <Label className="text-xs mr-3 w-1/3">Use chroma:</Label>
      <Switch
        checked={gradient.useChroma}
        onCheckedChange={(checked) => {
          setGradient((prev) => ({
            ...prev,
            useChroma: checked,
          }));
        }}
      />
    </div>
  );
};

export default ChromaSwitch;
