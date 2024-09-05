import { FC, PropsWithChildren } from "react";
import GenericButton from "@/components/ui/generic-button";
import { Trash } from "lucide-react";
import { useAtomValue } from "jotai";
import { gradientAliasFamily } from "@/state/gradients.state";

const GradientItem: FC<
  PropsWithChildren<{
    onDelete: VoidFunction;
    id: string;
    selected?: boolean;
    onSelect: (id: string) => void;
    index: number;
  }>
> = ({ onDelete, id, selected, index, onSelect }) => {
  const aliasAtom = useAtomValue(gradientAliasFamily(id));

  return (
    <li
      className={`w-full flex flex-col mb-1 border-b-2 border-b-solid transition-all box-border ${
        selected ? "border-blue-500" : "border-transparent"
      }`}
    >
      <label
        className="w-full flex items-center justify-between text-xs relative overflow-hidden pl-2 cursor-pointer rounded-lg"
        htmlFor={`gradient-${id}`}
      >
        <input
          name="gradient"
          type="radio"
          id={`gradient-${id}`}
          className="invisible absolute -left-56 -right-56"
          onChange={() => {
            onSelect(id);
          }}
          checked={selected}
        />
        <span className="inline-flex w-2/3 h-full text-ellipsis overflow-hidden">
          {aliasAtom.alias ?? `Gradient ${index + 1}`}
        </span>
        <GenericButton onClick={onDelete} title="Delete gradient">
          <Trash className="w-3 h-3 stroke-red-500" />
        </GenericButton>
      </label>
    </li>
  );
};

export default GradientItem;
