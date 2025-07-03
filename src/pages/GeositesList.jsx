import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import BentoTilt from '../components/BentoTilt'
import BentoCard from '../components/BentoCard'
import { useNavigate } from 'react-router';
import { GeoSitesData } from '../utils/data'

const tiltClasses = [
  "bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 sm:grid-cols-1",
  "bento-tilt_1 sm:col-span-2 md:col-span-1 md:me-0 sm:grid-cols-1",
  "bento-tilt_2",
  "bento-tilt_1 row-span-1 md:col-span-1 md:ms-0 sm:grid-cols-1",
];


const GeositesList = () => {
  const navigate = useNavigate();
  const [goToTop, setGoToTop] = useState(false);

  useEffect(() => {
    setGoToTop(true);
  }, []);

  return (
    <>
      <Navbar isHome={false} />
      <div className="my-20 min-h-96 w-screen px-10">
        <div className="py-10">
          <h1 className="special-font hero-heading text-center primary-color" ><b>GEO</b>SITES</h1>
        </div>
        <div className="container mx-auto px-3 md:px-10">
          
            <div className="grid w-full grid-cols-2 grid-rows-5 gap-7 md:grid-cols-2 sm:grid-cols-1">
              
              {Object.entries(GeoSitesData).map(([key, site]) => {
                const randomTiltClass = tiltClasses[Math.floor(Math.random() * tiltClasses.length)];

                return (
                  <BentoTilt key={key} className={randomTiltClass}>
                    <BentoCard
                      poster={site.cover}
                      src={null}
                      title={site.title}
                      description="The boulders of Mt. Apo are remnants of an ancient eruption, leaving the southeast scarred with fissures and solfatara along the trail"
                      isReadMore
                      readMoreFunc={() => {
                        navigate(`/geosites/${key}`);
                      }}
                    />
                  </BentoTilt>
                );
              })}


            </div>

        </div>
      </div>
      <Footer />
      <ScrollToTop goToTop={goToTop} />
    </>
  )
}

export default GeositesList
