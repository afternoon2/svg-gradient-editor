import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxRow: FC<{
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  id?: string;
}> = ({ checked, label, id, onChange }) => (
  <div className="w-full flex items-center py-2">
    <Label
      className="text-xs w-full inline-flex items-center cursor-pointer"
      htmlFor={id}
    >
      <span className="w-1/3 inline-flex mr-2">{label}:</span>
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        id={id}
        className="ml-1"
      />
    </Label>
  </div>
);

export default CheckboxRow;
