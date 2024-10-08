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
  options: { id: string; value: T, label: string; }[];
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
    <div className="flex w-full items-center mb-1">
      <Label className="text-xs mr-3 w-1/3">{label}</Label>
      <Select disabled={disabled} onValueChange={onValueChange} value={value}>
        <SelectTrigger className="w-[110px] p-1 text-xs">
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
  );
}

export default SelectRow;
