import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc} 
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};

export default LazyImage;
