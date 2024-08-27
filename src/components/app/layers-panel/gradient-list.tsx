import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  selectedGradientIdAtom,
  useGradientList,
  useSingleGradient,
} from "@/state/gradients.state";
import DeleteButton from "@/components/ui/delete-button";
import { useAtom } from "jotai";
import { Input } from "@/components/ui/input";

const GradientItem: FC<
  PropsWithChildren<{
    onDelete: VoidFunction;
    id: string;
    selected?: boolean;
    onSelect: (id: string) => void;
  }>
> = ({ onDelete, id, selected, onSelect }) => {
  const [gradient, setGradient] = useSingleGradient(id);
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li
      className={`w-full flex flex-col mb-2 border-2 border-solid transition-all box-border ${
        selected ? "border-ring" : "border-transparent"
      }`}
    >
      <label
        className="w-full flex items-center justify-between text-xs relative overflow-hidden pr-0 py-1 pl-2 cursor-pointer rounded-lg"
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
        <span className="inline-flex w-2/3">
          {isEdited ? (
            <Input
              type="text"
              ref={inputRef}
              min={2}
              className="p-1 text-xs"
              value={gradient.name}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsEdited(false);
                }
              }}
              onInput={(e) => {
                setGradient((prev) => ({
                  ...prev,
                  name: e.currentTarget.value,
                }));
              }}
            />
          ) : (
            <span
              onDoubleClick={(event) => {
                event.preventDefault();
                if (!isEdited) {
                  setIsEdited(true);
                  inputRef.current?.focus();
                }
              }}
            >
              {gradient.name ?? "Unnamed gradient"}
            </span>
          )}
        </span>
        <DeleteButton onClick={onDelete} tooltipText="Delete gradient" />
      </label>
    </li>
  );
};

const GradientList: FC = () => {
  const { gradientIds, deleteGradient } = useGradientList();
  const [selectedGradientId, setSelectedGradientId] = useAtom(
    selectedGradientIdAtom
  );

  return (
    <ul className="w-full flex flex-col overflow-y-auto max-h-[500px]">
      {gradientIds.map((gradientId) => (
        <GradientItem
          key={gradientId}
          id={gradientId}
          selected={gradientId === selectedGradientId}
          onDelete={() => {
            deleteGradient(gradientId);
          }}
          onSelect={setSelectedGradientId}
        />
      ))}
    </ul>
  );
};

export default GradientList;
