import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import BentoTilt from '../components/BentoTilt'
import BentoCard from '../components/BentoCard'
import { useNavigate } from "react-router";

const History = () => {
  const navigate = useNavigate();
  const [goToTop, setGoToTop] = useState(false);
  
  useEffect(() => {
    setGoToTop(true);
  }, []);

  return (
    <>
      <Navbar isHome={false} />
      <div className="my-20 min-h-96 w-screen px-10">
        <h1 className="special-font hero-heading text-center primary-color" ><b>History</b></h1>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            poster="img/geosites/seven-peaks/seven-peaks-001.jpg"
            src="videos/feature.mp4"
            title={
              <>
                About Mount <b>Apo</b>
              </>
            }
            description="Highest mountain peak in the Philippines with an elevation of 2,954 meters above sea level and a land area of 65,900.9 hectares..."
          />
        </BentoTilt>
      </div>
      <Footer />
      <ScrollToTop goToTop={goToTop} />
    </>
  )
}

export default History