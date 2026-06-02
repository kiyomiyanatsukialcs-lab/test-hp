interface ImageSlotProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageSlot({ placeholder, className, style }: ImageSlotProps) {
  return (
    <div className={`image-slot${className ? ` ${className}` : ''}`} style={style}>
      {placeholder && <span className="image-slot-label">{placeholder}</span>}
    </div>
  );
}
