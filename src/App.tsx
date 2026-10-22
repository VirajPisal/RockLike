import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Branding from "./pages/Branding";
import VideoProduction from "./pages/VideoProduction";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import BrandBuildingStrategies from "./pages/BrandBuildingStrategies";
import CelebrityManagement from "./pages/CelebrityManagement";
import EventDesigning from "./pages/EventDesigning";
import FranchiseDevelopment from "./pages/FranchiseDevelopment";

function AppShell({ children }: { children: React.ReactNode }) {
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
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/services" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/brand-building-strategies" element={<BrandBuildingStrategies />} />
          <Route path="/services/celebrity-management" element={<CelebrityManagement />} />
          <Route path="/services/event-designing" element={<EventDesigning />} />
          <Route path="/services/franchise-development" element={<FranchiseDevelopment />} />
          {/* Legacy redirects */}
          <Route path="/branding" element={<Navigate to="/services/branding" replace />} />
          <Route path="/video-production" element={<Navigate to="/services/video-production" replace />} />
          <Route path="/performance-marketing" element={<Navigate to="/services/performance-marketing" replace />} />
          {/* Placeholder routes */}
          <Route path="/work" element={<Navigate to="/services" replace />} />
          <Route path="/about" element={<Navigate to="/services" replace />} />
          <Route path="/events" element={<Navigate to="/services" replace />} />
          <Route path="/contact" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<Navigate to="/services" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
