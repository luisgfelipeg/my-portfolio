import { useRef } from 'react';
import { getRefValue, useStateRef } from '../../hooks';
import ImageItem, { ImageItemProps } from './ImageItem';

interface ImageSliderProps {
  items: Array<ImageItemProps>;
}

export function ImageSlider({ items }: ImageSliderProps) {
  const currentOffsetXRef = useRef(0);

  const startXRef = useRef(0);

  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);

  function onMouseMove(e: MouseEvent) {
    const currentX = e.clientX;
    const diff = getRefValue(startXRef) - currentX;
    const newOffsetX = getRefValue(currentOffsetXRef) - diff;

    setOffsetX(newOffsetX);
  }
  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    currentOffsetXRef.current = getRefValue(offsetXRef);

    startXRef.current = e.clientX;

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  return (
    <div
      className='w-9/12 max-w-full overflow-hidden'
      onMouseDown={onMouseDown}
    >
      <ul
        className='flex min-w-full flex-row'
        style={{
          transform: `translate3d(${offsetX}px, 0, 0)`,
        }}
      >
        {items.map((item, idx) => (
          <ImageItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}
