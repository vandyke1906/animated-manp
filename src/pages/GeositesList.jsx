import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import BentoTilt from '../components/BentoTilt'
import BentoCard from '../components/BentoCard'
import { useNavigate } from 'react-router';

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
          
            <div className="grid h-[200vh] w-full grid-cols-2 grid-rows-5 gap-7 md:grid-cols-2 sm:grid-cols-1">
              
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
                    navigate("/geosites/crater");
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
                      navigate("/geosites/crater");
                    }}
                  />
              </BentoTilt>

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
                    navigate("/geosites/crater");
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
                      navigate("/geosites/crater");
                    }}
                  />
              </BentoTilt>

            </div>

        </div>
      </div>
      <Footer />
      <ScrollToTop goToTop={goToTop} />
    </>
  )
}

export default GeositesList
