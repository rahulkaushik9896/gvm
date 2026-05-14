import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CareerPage from "../pages/CareerPage";
import GalleryPage from "../pages/GalleryPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
