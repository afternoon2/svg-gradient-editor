import React from 'react';
import View from '../view';

const Artboard: React.FC = () => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(0);
  const [currentHeight, setCurrentHeight] = React.useState<number>(0);

  const handleRef = React.useCallback((instance: SVGSVGElement) => {
    const { width, height } = instance.getBoundingClientRect();
    setCurrentWidth(width);
    setCurrentHeight(height);
  }, [setCurrentWidth, setCurrentHeight]);

  return (
    <svg
      id="artboard"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      ref={handleRef}
    >
      <View
        artboardWidth={currentWidth}
        artboardHeight={currentHeight}
      />
    </svg>
  );
};

export default Artboard;
