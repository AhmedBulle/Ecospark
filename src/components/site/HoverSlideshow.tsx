import { useEffect, useRef, useState } from "react";

interface HoverSlideshowProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
}

export function HoverSlideshow({ images, alt, className = "", interval = 1100 }: HoverSlideshowProps) {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hovering && images.length > 1) {
      timerRef.current = setInterval(() => {
        setActive((i) => (i + 1) % images.length);
      }, interval);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setActive(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovering, images.length, interval]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <img src={images[0]} alt="" aria-hidden className="invisible h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
      {images.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-spark" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
