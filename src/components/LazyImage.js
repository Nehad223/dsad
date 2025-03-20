import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className, placeholder }) => {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(placeholder); 
  const [loaded, setLoaded] = useState(false); 

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

  const handleLoad = () => {
    setLoaded(true); 
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${loaded ? "fade-in" : "blurred"}`} 
      onLoad={handleLoad}
      referrerPolicy="no-referrer"
    />
  );
};

export default LazyImage;
