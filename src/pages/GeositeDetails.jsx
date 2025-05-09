import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { useParams } from 'react-router';

const GeositeDetails = () => {
  const params = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(params?.name || "");
  }, []);

  return (
    <>
      <Navbar isHome={false} />
        <div className="my-20 min-h-96 w-screen px-10">
          <div className="py-10">
            <h1 className="special-font hero-heading text-center primary-color" ><b>{title}</b></h1>
          </div>
        </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default GeositeDetails