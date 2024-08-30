import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchRow: FC<{
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}> = ({ checked, label, onChange }) => (
  <div className="w-full flex items-center py-2">
    <Label className="text-xs mr-3 w-1/3">{label}:</Label>
    <Switch checked={checked} onCheckedChange={onChange} />
  </div>
);

export default SwitchRow;
