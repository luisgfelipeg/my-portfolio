import { useRef, useState } from 'react';
import { getRefValue, getTouchEventData, useStateRef } from '../../hooks';
import ImageItem, { ImageItemProps } from './ImageItem';

interface ImageSliderProps {
  items: Array<ImageItemProps>;
}

const MIN_SWIPE_REQUIRED = 40;

export function ImageSlider({ items }: ImageSliderProps) {
  const containerWidthRef = useRef(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  function onTouchMove(e: TouchEvent | MouseEvent) {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  }

  function onTouchStart(
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  }

  function onTouchEnd() {
    const containerWidth = getRefValue(containerWidthRef);
    const currentOffsetX = getRefValue(currentOffsetXRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
  }

  function indicatorOnClick(idx: number) {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  }

  return (
    <div
      className='w-9/12 max-w-full overflow-hidden touch-pan-y'
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
    >
      <ul
        ref={containerRef}
        className={`flex min-w-full flex-row swiper-list ${
          isSwiping ? 'swiping' : ''
        }`}
        style={{
          transform: `translate3d(${offsetX}px, 0, 0)`,
        }}
      >
        {items.map((item, idx) => (
          <ImageItem key={idx} {...item} />
        ))}
      </ul>
      <ul className='flex justify-center list-none mt-2'>
        {items.map((_item, idx) => (
          <li
            key={idx}
            className={`w-3 h-3 rounded-full mr-1 cursor-pointer ${
              idx === currentIdx ? 'bg-sky-300' : 'bg-sky-100'
            }`}
            onClick={() => indicatorOnClick(idx)}
          />
        ))}
      </ul>
    </div>
  );
}
