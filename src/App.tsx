import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Branding from "./pages/Branding";
import VideoProduction from "./pages/VideoProduction";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import BrandBuildingStrategies from "./pages/BrandBuildingStrategies";
import CelebrityManagement from "./pages/CelebrityManagement";
import EventDesigning from "./pages/EventDesigning";
import FranchiseDevelopment from "./pages/FranchiseDevelopment";

import Admin from "./pages/Admin";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function AppShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <div style={{ minHeight: "100%" }}>{children}</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Navbar />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell>
        <Routes>
          {/* Primary Top-Level Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          {/* Deep Service Sub-Pages */}
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/brand-building-strategies" element={<BrandBuildingStrategies />} />
          <Route path="/services/celebrity-management" element={<CelebrityManagement />} />
          <Route path="/services/event-designing" element={<EventDesigning />} />
          <Route path="/services/franchise-development" element={<FranchiseDevelopment />} />

          {/* Canonical redirects for legacy top-level URLs */}
          <Route path="/branding" element={<Navigate to="/services/branding" replace />} />
          <Route path="/video-production" element={<Navigate to="/services/video-production" replace />} />
          <Route path="/performance-marketing" element={<Navigate to="/services/performance-marketing" replace />} />
          <Route path="/social-media-marketing" element={<Navigate to="/services/social-media-marketing" replace />} />
          <Route path="/brand-building-strategies" element={<Navigate to="/services/brand-building-strategies" replace />} />
          <Route path="/celebrity-management" element={<Navigate to="/services/celebrity-management" replace />} />
          <Route path="/influencer-celebrity-marketing" element={<Navigate to="/services/celebrity-management" replace />} />
          <Route path="/services/influencer-celebrity-marketing" element={<Navigate to="/services/celebrity-management" replace />} />
          <Route path="/event-designing" element={<Navigate to="/services/event-designing" replace />} />
          <Route path="/franchise-development" element={<Navigate to="/services/franchise-development" replace />} />

          {/* Wildcard 404 fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
