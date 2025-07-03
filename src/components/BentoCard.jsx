
import { useState, useRef, useEffect } from "react";
import { FaEye } from "react-icons/fa";

export const BentoCard = ({ poster = "", src, title, description, isReadMore, readMoreFunc = () => {} }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);
    const [isPosterLoaded, setIsPosterLoaded] = useState(false);
    const posterRef = useRef(null);

    useEffect(() => {
      const img = posterRef.current;
      if (!img) return;

      if (img.complete && img.naturalWidth !== 0) {
        setIsPosterLoaded(true);
      } else {
        const handleLoad = () => setIsPosterLoaded(true);
        img.addEventListener("load", handleLoad);
        return () => img.removeEventListener("load", handleLoad);
      }
    }, [poster]);

  
    const handleMouseMove = (event) => {
      if (!hoverButtonRef.current) return;
      const rect = hoverButtonRef.current.getBoundingClientRect();
  
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };
  
    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);
  
    return (
      <div className="relative size-full">
        {!isPosterLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
            <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
          </div>
        )}

        <img
          ref={posterRef}
          src={poster}
          alt="poster"
          className="hidden"
        />

        <video
          alt="Poster"
          src={src}
          preload="none"
          loop
          muted
          autoPlay
          poster={poster}
          className="absolute left-0 top-0 size-full object-cover object-center transition-all duration-700"
          style={{
            filter: isPosterLoaded ? 'none' : 'blur(20px)',
            transform: isPosterLoaded ? 'scale(1)' : 'scale(1.05)',
            opacity: isPosterLoaded ? 1 : 0.8,
          }}
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
          </div>
  
          {isReadMore && (
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full primary-bg-color px-5 py-2 text-xs uppercase text-white"
              onClick={(e) => readMoreFunc(e)}
            >
              {/* Radial gradient hover effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
              />
              <FaEye className="relative z-20" />
              <p className="relative z-20">Read More</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default BentoCard;