import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DiscoverMore from "./pages/DiscoverMore";
import GeositeDetails from "./pages/GeositeDetails";
import GeositesList from "./pages/GeositesList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/geosites" >
        <Route index element={<GeositesList />} />
        <Route path=":name" element={<GeositeDetails />} />
      </Route>
      <Route path="/discover-more" element={<DiscoverMore />} />
    </Routes>
  )
}

export default App
