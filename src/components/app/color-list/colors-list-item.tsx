import { useListContext } from "@/state/list";
import { ColorSpace, InputColor } from "@/state/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FC, useCallback } from "react";
import ColorValue from "./color-value";
import ColorPicker from "./color-picker";
import { Edit } from "lucide-react";
import DeleteButton from "@/components/ui/delete-button";

const ColorsListItem: FC<{
  color: InputColor;
  gradientId: string;
  colorSpace: ColorSpace;
}> = ({ color, gradientId, colorSpace }) => {
  const { dispatch } = useListContext();

  const onChange = useCallback(
    (newColor: InputColor["color"]) => {
      dispatch({
        type: "UPDATE_COLOR",
        payload: {
          gradientId,
          color: {
            id: color.id,
            color: newColor,
          },
        },
      });
    },
    [dispatch, gradientId]
  );

  return (
    <li className="flex w-full items-center">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="w-10 h-10 rounded cursor-pointer"
            style={{ backgroundColor: `rgba(${color.color.join(",")}` }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker value={color.color} onChange={onChange} />
        </PopoverContent>
      </Popover>
      <ColorValue color={color} colorSpace={colorSpace} />
      <Popover>
        <PopoverTrigger asChild>
          <Edit className="mx-3 w-4 h-4" />
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker value={color.color} onChange={onChange} />
        </PopoverContent>
      </Popover>
      <DeleteButton
        onClick={() => {
          dispatch({
            type: "DELETE_COLOR",
            payload: {
              colorId: color.id,
              gradientId,
            },
          });
        }}
        tooltipText="Delete color"
      />
    </li>
  );
};

export default ColorsListItem;
