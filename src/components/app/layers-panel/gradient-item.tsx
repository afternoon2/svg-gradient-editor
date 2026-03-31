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
          ? "border border-border border-l-[3px] [border-image:var(--accent-gradient-2)_1] bg-background"
          : "border border-transparent border-l-[3px] border-l-border/45"
      }`}
    >
      <label
        className="w-full flex items-center justify-between text-sm relative overflow-hidden pl-3 py-2.5 pr-1 cursor-pointer rounded-lg"
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
        <span className="inline-flex flex-1 min-w-0 truncate">
          {gradient.alias ?? `Gradient ${index + 1}`}
        </span>
        <span
          className="shrink-0 text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded mr-1"
          style={{
            background: `var(--badge-gradient-${gradient.type})`,
            color: `var(--badge-color-${gradient.type})`,
          }}
        >
          {gradient.type}
        </span>
        <GenericButton onClick={onDelete} title="Delete gradient">
          <Trash className="w-4 h-4 stroke-red-500" />
        </GenericButton>
      </label>
    </li>
  );
};

export default GradientItem;
