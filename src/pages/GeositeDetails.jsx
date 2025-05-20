import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { useParams } from 'react-router';
import AnimatedTitle from '../components/AnimatedTitle';
import { GeoSitesData } from "../utils/data";
import Carousel from '../components/Carousel';

const GeositeDetails = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [goToTop, setGoToTop] = useState(false);

  useEffect(() => {
    setData(GeoSitesData[params?.id] || {});
    setGoToTop(true);
  }, [params?.id]);

  return (
    <>
      <Navbar isHome={false} />
        <div className="my-20 min-h-96 w-screen px-10">
          <div className="py-10">
            <Carousel />
            <AnimatedTitle title={data?.title || ""} containerClass="mt-5 !text-black text-center" textClass="special-font hero-heading text-center primary-color" />
            <div className="mb-8 flex flex-col items-center gap-5" >
                <h2 className="font-general text-sm md:text-[14px]" >{data?.description || ""}</h2>
            </div>

          </div>
        </div>
      <Footer />
      <ScrollToTop goToTop={goToTop} />
    </>
  )
}

export default GeositeDetails