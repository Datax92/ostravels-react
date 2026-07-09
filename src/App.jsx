import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import VisaIndex from "./pages/VisaIndex";
import VisaCountry from "./pages/VisaCountry";
import FileProcessingIndex from "./pages/FileProcessingIndex";
import FileProcessingCountry from "./pages/FileProcessingCountry";
import Contact from "./pages/Contact";
import Ticketing from "./pages/Ticketing";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<About />} />
        <Route path="/visa" element={<VisaIndex />} />
        <Route path="/visa/:slug" element={<VisaCountry />} />
        <Route path="/schengen-visa-file-processing" element={<FileProcessingIndex />} />
        <Route path="/schengen-visa-file-processing/:slug" element={<FileProcessingCountry />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact-2" element={<Contact />} />
        <Route path="/air-ticketing" element={<Ticketing />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
