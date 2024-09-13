import { AppColor } from "@/state/types";
import { FC } from "react";

const OutputSpectrum: FC<{ colors: AppColor[] }> = ({ colors }) => {
  const width = 100 / colors.length;
  return (
    <div className="w-full flex items-center p-1 pb-2">
      <div className="w-full flex h-7">
        {colors.map((color) => (
          <div
            className="h-full"
            style={{ backgroundColor: color.css, width: `${width}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default OutputSpectrum;
