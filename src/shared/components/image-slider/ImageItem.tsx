export interface ImageItemProps {
  imageSrc: string;
  imageAlt: string;
}

export function ImageItem({ imageSrc, imageAlt }: ImageItemProps) {
  return (
    <li className='w-full flex-shrink-0'>
      <img
        src={imageSrc}
        alt={imageAlt}
        className='w-full h-auto select-none'
        draggable={false}
      />
    </li>
  );
}

export default ImageItem;
