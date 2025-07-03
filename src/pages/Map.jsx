import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MountApoCoordinates } from '../utils/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Map = () => {  
  const mapRef = useRef(null);
  const latitude = 6.98734;
  const longitude = 125.27103;
  
  return (
    <>
      <Navbar isHome={false} />
      <div className="mt-20 mb-4 min-h-96 w-screen px-10 overflow-y-auto no-scrollbar">
        {/* <div className="py-10">
          <h1 className="special-font hero-heading text-center primary-color" ><b>Mount Apo</b> Map</h1>
        </div> */}
        <div className="container mx-auto">
          <MapContainer center={[latitude, longitude]} zoom={11} ref={mapRef} style={{height: "70vh", width: "90vw"}} bounds={MountApoCoordinates} boundsOptions={{ padding: [1, 1] }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]}>
                  <Popup>
                  Mount Apo Natural Park
                  </Popup>
              </Marker>
                <Polygon positions={MountApoCoordinates} />
            </MapContainer>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Map