import React from 'react';
import View from '../view';

const Artboard: React.FC = () => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(0);
  const [currentHeight, setCurrentHeight] = React.useState<number>(0);

  const ref: React.RefObject<SVGSVGElement> = React.createRef();

  const handleResize = React.useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setCurrentWidth(width);
      setCurrentHeight(height);
    }
  }, [ref, setCurrentWidth, setCurrentHeight]);

  React.useEffect(() => {
    if (currentWidth === 0 && currentHeight === 0) {
      handleResize();
    }
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, currentHeight, currentWidth]);

  return (
    <svg
      id="artboard"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      ref={ref}
    >
      <View
        artboardWidth={currentWidth}
        artboardHeight={currentHeight}
      />
    </svg>
  );
};

export default Artboard;
