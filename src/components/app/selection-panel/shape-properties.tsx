import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { artboardSizeAtom } from "@/state/artboard.state";
import { useAtomValue, useSetAtom } from "jotai";
import SliderRow from "../slider-row";
import { FC } from "react";

const ShapeProperties: FC = () => {
  const selectedGradient = useAtomValue(selectedGradientAtom);
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const [width, height] = useAtomValue(artboardSizeAtom);

  if (selectedGradient) {
    switch (selectedGradient.shape) {
      case "rect":
        return (
          <>
            <SliderRow
              title="x"
              min={0}
              max={width}
              step={1}
              value={[selectedGradient.rectData.x]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_RECT_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.rectData,
                      x: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="y"
              min={0}
              max={height}
              step={1}
              value={[selectedGradient.rectData.y]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_RECT_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.rectData,
                      y: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="width"
              min={1}
              max={width}
              step={0.01}
              value={[selectedGradient.rectData.width]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_RECT_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.rectData,
                      width: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="height"
              min={1}
              max={height}
              step={0.01}
              value={[selectedGradient.rectData.height]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_RECT_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.rectData,
                      height: value,
                    },
                  },
                });
              }}
            />
          </>
        );
      case "circle":
        return (
          <>
            <SliderRow
              title="cx"
              min={1}
              max={width}
              step={0.01}
              value={[selectedGradient.circleData.cx]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_CIRCLE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.circleData,
                      cx: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="cy"
              min={1}
              max={height}
              step={0.01}
              value={[selectedGradient.circleData.cy]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_CIRCLE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.circleData,
                      cy: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="r"
              min={1}
              max={width}
              step={0.01}
              value={[selectedGradient.circleData.r]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_CIRCLE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.circleData,
                      r: value,
                    },
                  },
                });
              }}
            />
          </>
        );
      case "ellipse":
        return (
          <>
            <SliderRow
              title="cx"
              min={1}
              max={width}
              step={0.01}
              value={[selectedGradient.ellipseData.cx]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_ELLIPSE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.ellipseData,
                      cx: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="cy"
              min={1}
              max={height}
              step={0.01}
              value={[selectedGradient.ellipseData.cy]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_ELLIPSE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.ellipseData,
                      cy: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="rx"
              min={1}
              max={width}
              step={0.01}
              value={[selectedGradient.ellipseData.rx]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_ELLIPSE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.ellipseData,
                      rx: value,
                    },
                  },
                });
              }}
            />
            <SliderRow
              title="ry"
              min={1}
              max={height}
              step={0.01}
              value={[selectedGradient.ellipseData.ry]}
              onValueChange={([value]) => {
                dispatch({
                  type: "SET_ELLIPSE_DATA",
                  payload: {
                    gradientId: selectedGradient.id,
                    data: {
                      ...selectedGradient.ellipseData,
                      ry: value,
                    },
                  },
                });
              }}
            />
          </>
        );
    }
  }
  return null;
};

export default ShapeProperties;
