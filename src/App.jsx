import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DiscoverMore from "./pages/DiscoverMore";
import GeositeDetails from "./pages/GeositeDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/geosite/:name" element={<GeositeDetails />} />
      <Route path="/discover-more" element={<DiscoverMore />} />
    </Routes>
  )
}

export default App
