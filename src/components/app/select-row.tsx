import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps, SelectValueProps } from "@radix-ui/react-select";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

type Props<T extends string> = {
  options: { id: string; value: T; label: string }[];
  value: T;
  label: string;
  children?: ReactNode;
} & Pick<SelectProps, "disabled" | "onValueChange"> &
  Pick<SelectValueProps, "placeholder">;

function SelectRow<T extends string>({
  options,
  value,
  label,
  disabled,
  placeholder,
  children,
  onValueChange,
}: Props<T>): ReactNode {
  return (
    <div className="flex w-full items-center justify-between py-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      <div className="flex items-center gap-1">
        <Select disabled={disabled} onValueChange={onValueChange} value={value}>
          <SelectTrigger className="w-[120px] h-9 px-3 text-sm">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.id} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {children}
      </div>
    </div>
  );
}

export default SelectRow;
