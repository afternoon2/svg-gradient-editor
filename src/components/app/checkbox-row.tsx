import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FC, useId } from "react";

const CheckboxRow: FC<{
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}> = ({ checked, label, onChange }) => {
  const id = useId();

  return (
    <div className="w-full flex items-center justify-between py-1.5">
      <Label
        className="text-sm font-medium text-foreground cursor-pointer"
        htmlFor={id}
      >
        {label}
      </Label>
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        id={id}
      />
    </div>
  );
};

export default CheckboxRow;
