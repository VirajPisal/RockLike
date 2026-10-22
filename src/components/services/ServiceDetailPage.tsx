import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import FacetedSphere from "./FacetedSphere";
import {
  type ServiceDetailConfig,
  type SubServiceDetail,
  serviceNavList,
} from "../../data/servicesDetailedData";

interface ServiceDetailPageProps {
  config: ServiceDetailConfig;
}

export default function ServiceDetailPage({ config }: ServiceDetailPageProps) {
  const location = useLocation();
  const [activeSubServiceId, setActiveSubServiceId] = useState<string>(
    config.subServices[0]?.id || ""
  );
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync active subservice when switching pages
  useEffect(() => {
    if (config.subServices.length > 0) {
      setActiveSubServiceId(config.subServices[0].id);
    }
  }, [config.id]);

  // Smooth scroll listener for kinetic text motion and scroll-to-top button
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);
          setShowScrollTop(currentY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeSubService: SubServiceDetail =
    config.subServices.find((s) => s.id === activeSubServiceId) ||
    config.subServices[0];

  // Dynamic subtle scroll transforms for moving text
  const headlineParallax = Math.min(scrollY * 0.1, 30);
  const bannerParallax = Math.min(scrollY * 0.05, 18);
  const streamOffset = (scrollY * 0.3) % 1200;

  return (
    <div className="service-page-wrapper min-h-screen bg-[#F8F9FB] text-slate-900 font-sans relative selection:bg-[#0D529C] selection:text-white antialiased overflow-x-hidden">
      <style>{`
        .service-page-wrapper {
          --text-primary: #0F172A !important;
          --text-secondary: #334155 !important;
          --text-muted: #64748B !important;
          color: #0F172A !important;
        }
        .service-page-wrapper h1,
        .service-page-wrapper h2,
        .service-page-wrapper h3,
        .service-page-wrapper h4,
        .service-page-wrapper h5,
        .service-page-wrapper h6 {
          color: #0F172A !important;
        }
        .service-page-wrapper p {
          color: #334155 !important;
        }
        .service-page-wrapper .text-white,
        .service-page-wrapper h2.text-white,
        .service-page-wrapper h3.text-white {
          color: #FFFFFF !important;
        }
        .service-page-wrapper .text-blue-100 {
          color: #DBEAFE !important;
        }
        .service-page-wrapper .text-blue-300 {
          color: #93C5FD !important;
        }
        .service-page-wrapper .text-[#0D529C] {
          color: #0D529C !important;
        }
        .service-page-wrapper .text-[#D4A024] {
          color: #D4A024 !important;
        }
        .service-page-wrapper .text-slate-400 {
          color: #94A3B8 !important;
        }
        .service-page-wrapper .text-slate-500 {
          color: #64748B !important;
        }
        .service-page-wrapper .text-slate-600 {
          color: #475569 !important;
        }
        .service-page-wrapper .text-slate-700 {
          color: #334155 !important;
        }
        .service-page-wrapper .text-slate-800 {
          color: #1E293B !important;
        }
        .service-page-wrapper .text-slate-900 {
          color: #0F172A !important;
        }
        .service-page-wrapper .text-slate-950 {
          color: #020617 !important;
        }
      `}</style>

      {/* ── Soft Ambient Background Glows ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
          style={{ background: "radial-gradient(circle, #0D529C 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[40%] -right-40 w-[550px] h-[550px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #D4A024 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full blur-[130px] opacity-15"
          style={{ background: "radial-gradient(circle, #0D529C 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Main Container with dedicated top spacing for Navbar ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        style={{ paddingTop: "calc(var(--nav-height, 80px) + 2rem)" }}
      >
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: config.title },
            ]}
            accent="#0D529C"
          />
        </div>

        {/* ── Service Hero Header ── */}
        <header className="mb-10">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 mb-5 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D529C] animate-pulse" />
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#0D529C]">
              {config.heroBadge}
            </span>
          </div>

          {/* Primary High-Impact Headline with smooth scroll drift */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.06] max-w-4xl transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(0, -${headlineParallax}px, 0)`,
            }}
          >
            {config.heroHeadline}{" "}
            <span className="text-[#0D529C] underline decoration-[#D4A024] decoration-4 underline-offset-8">
              {config.heroHeadlineAccent}
            </span>
          </h1>

          <p className="mt-5 text-xl sm:text-2xl text-slate-700 font-medium max-w-3xl leading-relaxed">
            {config.tagline}
          </p>

          {/* ── Photographic Hero Banner with Tag ── */}
          <div
            className="mt-8 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-slate-200/80 transition-transform duration-100 ease-out aspect-[21/9] max-h-[460px] bg-slate-900"
            style={{
              transform: `translate3d(0, -${bannerParallax}px, 0)`,
            }}
          >
            <img
              src={config.heroImage}
              alt={config.title}
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04]"
              loading="eager"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Banner Badge (Matching Reference Screenshot) */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/95 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-white/60 shadow-lg pointer-events-none">
              <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-slate-900">
                {config.heroImageTag}
              </p>
            </div>

            {/* Bottom Title Overlay */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-300">
                  ROCKLIKE CAPABILITY SUITE
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {config.fullTitle}
                </h2>
              </div>
            </div>
          </div>
        </header>

        {/* ── Dynamic Gliding Capability Stream (Moving Text Banner - Cleanly Placed Below Hero) ── */}
        <div className="my-10 w-full overflow-hidden bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl py-4 px-2 shadow-xs">
          <div
            className="flex whitespace-nowrap will-change-transform text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-600"
            style={{
              transform: `translate3d(-${streamOffset}px, 0, 0)`,
              transition: "transform 0.1s linear",
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-8 px-6 shrink-0">
                <span className="text-[#0D529C] font-black">✦ ROCKLIKE TECHVENTURES</span>
                <span className="text-slate-800">{config.category}</span>
                <span className="text-[#D4A024]">✦</span>
                <span className="text-slate-800">HIGH-CRAFT EXECUTION</span>
                <span className="text-[#0D529C]">✦</span>
                <span className="text-slate-800">DATA-DRIVEN ROI</span>
                <span className="text-[#D4A024]">✦</span>
                <span className="text-slate-800">ENTERPRISE SCALE</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TWO-COLUMN CORE LAYOUT (Exact Match to User's Reference Screenshot) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* ── LEFT COLUMN: Text Copy + Sub Services Pills + Deep Dive ── */}
          <div className="lg:col-span-8 relative">
            
            {/* 3D Faceted Geodesic Sphere floating subtly on the left margin */}
            <div className="hidden xl:block absolute -left-36 top-6 z-0">
              <FacetedSphere scrollOffset={scrollY} />
            </div>

            {/* High-Level Narrative Copy (Matching Screenshot Style with Large, Crisp Legibility) */}
            <div className="relative z-10 space-y-6 text-slate-700 text-lg sm:text-xl leading-relaxed font-normal">
              <p className="border-l-4 border-[#0D529C] pl-5 italic text-slate-900 font-semibold text-xl sm:text-2xl leading-relaxed">
                {config.introParagraph1}
              </p>
              <p className="pl-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {config.introParagraph2}
              </p>
            </div>

            {/* ── Sub Services Section ── */}
            <div className="relative z-10 mt-14 pt-10 border-t border-slate-200">
              
              {/* Section Header: Blue vertical bar + Title */}
              <div className="flex items-center gap-3.5 mb-7">
                <span className="w-2 h-8 bg-[#0D529C] rounded-full shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {config.subServicesHeading}
                </h3>
              </div>

              {/* ── SUB-SERVICES PILLS (Large, High-Clarity Checkmark Badges - NOT Cards!) ── */}
              <div className="flex flex-wrap gap-3 sm:gap-3.5 mb-10">
                {config.subServices.map((sub) => {
                  const isActive = sub.id === activeSubServiceId;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubServiceId(sub.id)}
                      className={`inline-flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-2xs select-none ${
                        isActive
                          ? "bg-[#0D529C] text-white shadow-md shadow-blue-900/25 ring-2 ring-[#0D529C]/30 scale-[1.02]"
                          : "bg-white text-slate-800 border-2 border-slate-200 hover:border-[#0D529C] hover:bg-blue-50/50 hover:text-[#0D529C]"
                      }`}
                    >
                      {/* Checkmark icon (Blue when inactive, White when active) */}
                      <span
                        className={`text-base font-black ${
                          isActive ? "text-white" : "text-[#0D529C]"
                        }`}
                      >
                        ✓
                      </span>
                      <span>{sub.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* ── ACTIVE SUB-SERVICE DEEP DIVE MODULE (Enhanced Large Font & High Contrast) ── */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#D4A024] block mb-1">
                      ACTIVE CAPABILITY FOCUS
                    </span>
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      {activeSubService.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs sm:text-sm font-bold px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-[#0D529C]">
                      ⏱ {activeSubService.timeline}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-slate-800 text-lg sm:text-xl leading-relaxed font-normal">
                  {activeSubService.description}
                </p>

                {/* Key Deliverables Grid (Enhanced Font Size & Clear Check Badges) */}
                <div className="mt-8">
                  <h5 className="text-sm sm:text-base font-black tracking-wider uppercase text-slate-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-5 bg-[#0D529C] rounded-full" />
                    Specific Deliverables Included:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeSubService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-2xs hover:border-[#0D529C]/50 hover:bg-white hover:shadow-xs transition-all"
                      >
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0D529C] font-black text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          ✓
                        </span>
                        <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Business Impact & Output Format */}
                <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-blue-50/70 rounded-2xl p-6 border border-blue-200/80">
                    <span className="font-black text-[#0D529C] uppercase tracking-wider block text-xs sm:text-sm mb-2.5">
                      Business Outcome & Strategic Impact
                    </span>
                    <p className="text-slate-900 font-bold text-base sm:text-lg leading-relaxed">
                      {activeSubService.strategicImpact}
                    </p>
                  </div>
                  <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200/80">
                    <span className="font-black text-[#D4A024] uppercase tracking-wider block text-xs sm:text-sm mb-2.5">
                      Deliverable Asset Format
                    </span>
                    <p className="text-slate-900 font-bold text-base sm:text-lg leading-relaxed">
                      {activeSubService.deliverableFormat}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Key Metrics Bar ── */}
            <div className="relative z-10 mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {config.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs text-center"
                >
                  <p className="text-4xl sm:text-5xl font-black text-[#0D529C] tracking-tight">
                    {metric.value}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-1.5">
                    {metric.label}
                  </p>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    {metric.subtext}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Execution Process (4/5 Phases) (Enhanced Font Sizes & Clean Hierarchy) ── */}
            <div className="relative z-10 mt-16">
              <div className="flex items-center gap-3.5 mb-2">
                <span className="w-2 h-8 bg-[#D4A024] rounded-full shrink-0" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  {config.processTitle}
                </h3>
              </div>
              <p className="text-slate-700 text-lg sm:text-xl mb-8 max-w-3xl font-medium leading-relaxed">
                {config.processSubtitle}
              </p>

              <div className="space-y-4">
                {config.processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xs gap-5 hover:border-[#0D529C]/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0D529C] text-lg font-black shrink-0 shadow-2xs">
                        {step.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#D4A024]">
                            {step.phase}
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-base sm:text-lg text-slate-700 font-medium mt-1.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <span className="self-end sm:self-center text-sm font-bold px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 shrink-0">
                      {step.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Sticky All-Services Navigation Sidebar (Matching Reference Screenshot) ── */}
          <aside className="lg:col-span-4 sticky top-28 z-20">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#0D529C]">
                  SERVICES DIRECTORY
                </span>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  8 Capabilities
                </span>
              </div>

              {/* Navigation List of Other Services */}
              <nav className="space-y-2" aria-label="Services Navigation">
                {serviceNavList.map((service) => {
                  const isCurrent =
                    location.pathname === service.href ||
                    location.pathname.startsWith(service.href);

                  return (
                    <Link
                      key={service.id}
                      to={service.href}
                      className={`group flex items-center justify-between p-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 ${
                        isCurrent
                          ? "bg-blue-50 text-[#0D529C] shadow-2xs border border-blue-200/80"
                          : "text-slate-800 hover:text-[#0D529C] hover:bg-slate-50 hover:translate-x-1"
                      }`}
                    >
                      <span className="leading-snug pr-3">{service.title}</span>
                      <span
                        className={`text-lg font-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ${
                          isCurrent ? "text-[#0D529C]" : "text-slate-400 group-hover:text-[#0D529C]"
                        }`}
                      >
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Contact Card inside Sidebar */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50/50 border border-blue-100 text-center">
                  <p className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    Need Custom Scope?
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Direct access to Rocklike's executive creative and technical directors.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#0D529C] hover:bg-[#093D75] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors shadow-sm"
                  >
                    Schedule Consultation →
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>

        {/* ── Bottom High-Converting Call To Action Banner ── */}
        <section className="mt-24 rounded-3xl bg-gradient-to-r from-[#0D529C] via-[#093D75] to-[#0A2540] p-8 sm:p-14 lg:p-18 text-white shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "#D4A024" }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#D4A024] mb-3">
              TAKE THE NEXT STEP
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {config.ctaHeadline}
            </h3>
            <p className="mt-4 text-base sm:text-xl text-blue-100 max-w-2xl leading-relaxed">
              {config.ctaSubtext}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-[#D4A024] hover:bg-[#B8871B] text-slate-950 text-sm sm:text-base font-black tracking-wider uppercase transition-all duration-200 shadow-lg hover:scale-105"
              >
                Start Your Project →
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 sm:px-8 sm:py-4.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold tracking-wider uppercase backdrop-blur-sm transition-all duration-200 border border-white/20"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ── Floating Scroll-To-Top Button (Matching Reference Screenshot) ── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0D529C] hover:bg-[#093D75] text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
