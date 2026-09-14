import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const BranchesIndex = lazy(() => import("./pages/BranchesIndex"));
const BranchIslamabad = lazy(() => import("./pages/BranchIslamabad"));
const Credentials = lazy(() => import("./pages/Credentials"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<Navigate to="/about/" replace />} />
          <Route path="/about/registrations-and-licenses" element={<Credentials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-2" element={<Navigate to="/contact/" replace />} />
          <Route path="/contact-2/*" element={<Navigate to="/contact/" replace />} />
          <Route path="/travel-insurance" element={<Insurance />} />
          <Route path="/insurance" element={<Navigate to="/travel-insurance/" replace />} />
          <Route path="/visa" element={<VisaIndex />} />
          <Route path="/visa/:slug" element={<VisaCountry />} />
          <Route path="/schengen-visa-file-processing" element={<FileProcessingIndex />} />
          <Route path="/schengen-visa-file-processing/:slug" element={<FileProcessingCountry />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/air-ticketing" element={<Ticketing />} />
          <Route path="/ticketing" element={<Navigate to="/air-ticketing/" replace />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/branches" element={<BranchesIndex />} />
          <Route path="/branches/islamabad-blue-area" element={<BranchIslamabad />} />
          <Route path="/branches/peshawar" element={<Navigate to="/branches/islamabad-blue-area/" replace />} />
          <Route path="/branches/peshawar/*" element={<Navigate to="/branches/islamabad-blue-area/" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy/" replace />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Navigate to="/terms/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}