import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const VisaIndex = lazy(() => import("./pages/VisaIndex"));
const VisaCountry = lazy(() => import("./pages/VisaCountry"));
const FileProcessingIndex = lazy(() => import("./pages/FileProcessingIndex"));
const FileProcessingCountry = lazy(() => import("./pages/FileProcessingCountry"));
const Insurance = lazy(() => import("./pages/Insurance"));
const Contact = lazy(() => import("./pages/Contact"));
const Ticketing = lazy(() => import("./pages/Ticketing"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Reviews = lazy(() => import("./pages/Reviews"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/travel-insurance" element={<Insurance />} />
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
      </Suspense>
      <Analytics />
    </>
  );
}