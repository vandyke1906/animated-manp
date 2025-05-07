/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { TiEye } from "react-icons/ti";
import { Link, useNavigate } from "react-router";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ poster = "", src, title, description, isReadMore, readMoreFunc = () => {} }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

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
      <video
        src={src}
        loop
        muted
        autoPlay
        poster={poster}
        className="absolute left-0 top-0 size-full object-cover object-center"
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

const Geosites = () => {
  const navigate = useNavigate();
  return (
    <section id="geosites" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Mt. Apo Natural Park: A Geological Wonder
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Mt. Apo Natural Park is home to stunning geosites that showcase the Earth's rich geological history. 
            From volcanic formations to diverse rock landscapes, these sites tell the story of Mt. Apo’s dynamic past. 
            As the highest peak in the Philippines, it offers breathtaking views, geothermal features, and unique ecosystems that make it a haven for nature enthusiasts and conservationists.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            poster="img/geosites/seven-peaks-001.jpg"
            src="videos/feature.mp4"
            title={
              <>
                Seven P<b>ea</b>ks
              </>
            }
            description="The Seven Peaks of Mt. Apo is the main remnant of the volcanic dome of the potentially active volcano before it collapsed..."
            isReadMore
            readMoreFunc={() => {
              navigate("/geosite/seven-peaks");
            }}
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 sm:grid-cols-1">
            <BentoCard
              poster="img/geosites/boulders-001.jpg"
              src="videos/feature.mp4"
              title={
                <>
                  B<b>ou</b>lder Face
                </>
              }
              description="The boulders of Mt. Apo are remnants of an ancient eruption, leaving the southeast scarred with fissures and solfatara along the trail"
              isReadMore
              readMoreFunc={() => {
                navigate("/geosites/boulders");
              }}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:ms-0 sm:grid-cols-1">
            <BentoCard
              poster="img/geosites/crater-001.jpg"
              src="videos/feature.mp4"
              title={
                <>
                  Old <b>Apo Crater</b> Lake
                </>
              }
              description="Formed by Mt. Apo’s prehistoric eruption, this endorheic lake has no outlet and serves as a catchment basin, spanning about 100 meters in diameter."
              isReadMore
              readMoreFunc={() => {
                navigate("/geosites/creater");
              }}
            />
          
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 sm:col-span-2 md:col-span-1 md:me-0 sm:grid-cols-1">
            <BentoCard
              poster="img/geosites/solfatara-001.jpg"
              src="videos/feature.mp4"
              title={
                <>
                  Mandarangan <b>Solfatara</b>
                </>
              }
              description="The Mandarangan Sulfatara likely formed from magma heating groundwater, causing it to rise and react with rocks, creating sulfur deposits."
              isReadMore
              readMoreFunc={() => {
                navigate("/geosites/solfatara");
              }}
            />
          
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-green-700 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re g<b>eo</b>sites .
              </h1>
              <Link to="/geosites" className="m-5 scale-[5] self-end">
                <TiEye />
              </Link>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              poster="img/geosites/feature-001.jpg"
              src="videos/feature.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Geosites;