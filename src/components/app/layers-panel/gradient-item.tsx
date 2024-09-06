import { FC, PropsWithChildren } from "react";
import GenericButton from "@/components/ui/generic-button";
import { Trash } from "lucide-react";
import { Gradient } from "@/state/gradient.store";

const GradientItem: FC<
  PropsWithChildren<{
    onDelete: VoidFunction;
    gradient: Gradient;
    selected?: boolean;
    onSelect: (id: string) => void;
    index: number;
  }>
> = ({ onDelete, gradient, selected, index, onSelect }) => {
  return (
    <li
      className={`w-full flex flex-col mb-1 border-b-2 border-b-solid transition-all box-border ${
        selected ? "border-blue-500" : "border-transparent"
      }`}
    >
      <label
        className="w-full flex items-center justify-between text-xs relative overflow-hidden pl-2 cursor-pointer rounded-lg"
        htmlFor={`gradient-${gradient.id}`}
      >
        <input
          name="gradient"
          type="radio"
          id={`gradient-${gradient.id}`}
          className="invisible absolute -left-56 -right-56"
          onChange={() => {
            onSelect(gradient.id);
          }}
          checked={selected}
        />
        <span className="inline-flex w-2/3 h-full text-ellipsis overflow-hidden">
          {gradient.alias ?? `Gradient ${index + 1}`}
        </span>
        <GenericButton onClick={onDelete} title="Delete gradient">
          <Trash className="w-3 h-3 stroke-red-500" />
        </GenericButton>
      </label>
    </li>
  );
};

export default GradientItem;
