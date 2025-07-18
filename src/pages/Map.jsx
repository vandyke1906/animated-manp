import { useRef, useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { MountApoCoordinates } from '../utils/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import "leaflet/dist/leaflet.css";

const Map = () => {  
  const mapRef = useRef(null);
  const latitude = 6.98734;
  const longitude = 125.27103;
  const [goToTop, setGoToTop] = useState(false);

  useEffect(() => {
    setGoToTop(true);
  }, []);
  
  return (
    <>
      <Navbar isHome={false} />
      <MapContainer center={[6.95, 125.2792]} zoom={12} ref={mapRef} style={{height: "100vh", width: "100vw"}} bounds={MountApoCoordinates} boundsOptions={{ padding: [1, 1] }} className="z-10" scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon positions={MountApoCoordinates} />
        <Marker position={[latitude, longitude]}>
            <Popup>
            Mount Apo Natural Park
            </Popup>
        </Marker>
      </MapContainer>
      <Footer />
      <ScrollToTop goToTop={goToTop} />
    </>
  )
}

export default Map