/* eslint-disable react/prop-types */
import React from "react";
import { TiEye } from "react-icons/ti";
import { Link, useNavigate } from "react-router";
import BentoTilt from "./BentoTilt";
import BentoCard from "./BentoCard";


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
            poster="img/geosites/seven-peaks/seven-peaks-001.jpg"
            src="videos/feature.mp4"
            title={
              <>
                Seven P<b>ea</b>ks
              </>
            }
            description="The Seven Peaks of Mt. Apo is the main remnant of the volcanic dome of the potentially active volcano before it collapsed..."
            isReadMore
            readMoreFunc={() => {
              navigate("/geosites/seven-peaks/seven-peaks");
            }}
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 sm:grid-cols-1">
            <BentoCard
              poster="img/geosites/boulders/boulders-001.jpg"
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
              poster="img/geosites/crater/crater-001.jpg"
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
              poster="img/geosites/solfatara/solfatara-001.jpg"
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
              src="videos/hero-3.mp4"
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