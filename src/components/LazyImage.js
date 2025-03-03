
import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className, placeholder }) => {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(placeholder); // Start with the placeholder image
  const [loaded, setLoaded] = useState(false); // State to handle loaded image

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1 } // Adjust this value if needed
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  const handleLoad = () => {
    setLoaded(true); // Set image as loaded
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc} 
      alt={alt}
      className={`${className} ${loaded ? "fade-in" : "blurred"}`} // Add fade-in class once image is loaded
      onLoad={handleLoad}
      referrerPolicy="no-referrer"
    />
  );
};

export default LazyImage;