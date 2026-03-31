import GenericButton from "@/components/ui/generic-button";
import { FC, PropsWithChildren } from "react";
import { Gradient } from "@/state/types";
import { Trash } from "lucide-react";

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
      className={`w-full flex flex-col mb-1 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] box-border rounded-r-md hover:bg-accent/20 ${
        selected
          ? "border-l-[3px] [border-image:var(--accent-gradient-2)_1] bg-accent/30"
          : "border-l-[3px] border-l-transparent"
      }`}
    >
      <label
        className="w-full flex items-center justify-between text-sm relative overflow-hidden pl-3 py-2 cursor-pointer rounded-lg"
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
