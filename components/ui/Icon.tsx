type IconProps = {
  src: string;
  size?: number;
  className?: string;
  alt?: string;
};

export function Icon({ src, size = 24, className = "", alt = "" }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
