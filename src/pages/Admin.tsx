import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../components/common/BrandLogo";
import {
  fetchSiteMetrics,
  updateSiteMetric,
  fetchAllInquiries,
  updateInquiryStatus,
  SiteMetrics,
  DEFAULT_METRICS,
  InquiryRecord,
} from "../lib/supabase";

const DEFAULT_PASSKEY = "rocklike2026";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState("");
  const [passkeyError, setPasskeyError] = useState(false);

  const [activeTab, setActiveTab] = useState<"metrics" | "leads">("metrics");
  const [metrics, setMetrics] = useState<SiteMetrics>(DEFAULT_METRICS);
  const [savingMetrics, setSavingMetrics] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [leadFilter, setLeadFilter] = useState<"all" | "new" | "contacted" | "closed">("all");

  // Check existing session
  useEffect(() => {
    const auth = sessionStorage.getItem("rocklike_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch metrics and leads on login
  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    setLoadingLeads(true);
    const [fetchedMetrics, fetchedInquiries] = await Promise.all([
      fetchSiteMetrics(),
      fetchAllInquiries(),
    ]);
    setMetrics(fetchedMetrics);
    setInquiries(fetchedInquiries);
    setLoadingLeads(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput === DEFAULT_PASSKEY) {
      setIsAuthenticated(true);
      sessionStorage.setItem("rocklike_admin_auth", "true");
      setPasskeyError(false);
    } else {
      setPasskeyError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("rocklike_admin_auth");
    setPasskeyInput("");
  };

  const handleMetricChange = (key: keyof SiteMetrics, val: string) => {
    setMetrics((prev) => ({ ...prev, [key]: val }));
  };

  const handleSaveMetrics = async () => {
    setSavingMetrics(true);
    setSaveSuccess(false);

    const keys = Object.keys(metrics) as (keyof SiteMetrics)[];
    await Promise.all(keys.map((k) => updateSiteMetric(k, metrics[k])));

    setSavingMetrics(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    const ok = await updateInquiryStatus(id, newStatus);
    if (ok) {
      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    }
  };

  // ─── LOGIN SCREEN (Minimalist Luxury Passkey) ───
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#06080D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Ambient Glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,160,36,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <BrandLogo size="md" withTagline={false} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "#FFFFFF",
              margin: "0 0 0.5rem",
            }}
          >
            Executive Console
          </h2>
          <p
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "0.8125rem",
              color: "#94A3B8",
              margin: "0 0 2rem",
            }}
          >
            Authorized Studio Access · Enter Master Passkey
          </p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter Passkey (rocklike2026)"
                value={passkeyInput}
                onChange={(e) => {
                  setPasskeyInput(e.target.value);
                  setPasskeyError(false);
                }}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "rgba(10, 14, 24, 0.85)",
                  border: `1px solid ${passkeyError ? "#EF4444" : "rgba(255, 255, 255, 0.15)"}`,
                  borderRadius: "10px",
                  padding: "0.85rem 1rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.9375rem",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                  outline: "none",
                }}
              />
              {passkeyError && (
                <div style={{ color: "#F87171", fontSize: "0.75rem", marginTop: "0.5rem" }}>
                  Invalid passkey. Try: <code style={{ color: "var(--clr-gold)" }}>rocklike2026</code>
                </div>
              )}
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "var(--clr-gold)",
                color: "#07090E",
                border: "none",
                borderRadius: "10px",
                padding: "0.85rem 1.5rem",
                fontFamily: "var(--font-fine)",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(212, 160, 36, 0.35)",
                transition: "all 0.2s ease",
              }}
            >
              Access Console →
            </button>
          </form>

          <div style={{ marginTop: "1.75rem" }}>
            <Link
              to="/"
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.75rem",
                color: "#64748B",
                textDecoration: "none",
              }}
            >
              ← Return to Rocklike Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── AUTHENTICATED EXECUTIVE CONSOLE ───
  const filteredInquiries = inquiries.filter((inq) => {
    if (leadFilter === "all") return true;
    return inq.status.toLowerCase() === leadFilter;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#070A10",
        color: "#FFFFFF",
        fontFamily: "var(--font-fine)",
      }}
    >
      {/* Top Console Bar */}
      <header
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <BrandLogo size="sm" withTagline={false} />
            <div style={{ height: "24px", width: "1px", backgroundColor: "rgba(255, 255, 255, 0.15)" }} />
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.04em", color: "#FFFFFF" }}>
                Executive Console
              </div>
              <div style={{ fontSize: "0.6875rem", color: "#34D399", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                Supabase Connected Live
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              to="/"
              target="_blank"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--clr-gold)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              Open Live Website ↗
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "6px",
                padding: "0.4rem 0.85rem",
                color: "#94A3B8",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "1rem",
          }}
        >
          <button
            onClick={() => setActiveTab("metrics")}
            style={{
              background: activeTab === "metrics" ? "rgba(212, 160, 36, 0.15)" : "transparent",
              border: `1px solid ${activeTab === "metrics" ? "var(--clr-gold)" : "transparent"}`,
              color: activeTab === "metrics" ? "var(--clr-gold)" : "#94A3B8",
              padding: "0.65rem 1.25rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
          >
            📊 Live Website Metrics
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            style={{
              background: activeTab === "leads" ? "rgba(212, 160, 36, 0.15)" : "transparent",
              border: `1px solid ${activeTab === "leads" ? "var(--clr-gold)" : "transparent"}`,
              color: activeTab === "leads" ? "var(--clr-gold)" : "#94A3B8",
              padding: "0.65rem 1.25rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.18s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>📬 Client Inquiries</span>
            <span
              style={{
                backgroundColor: "var(--clr-gold)",
                color: "#07090E",
                fontSize: "0.6875rem",
                fontWeight: 800,
                padding: "0.15rem 0.5rem",
                borderRadius: "9999px",
              }}
            >
              {inquiries.length}
            </span>
          </button>

          <button
            onClick={loadData}
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#94A3B8",
              padding: "0.55rem 0.95rem",
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ↻ Refresh Data
          </button>
        </div>

        {/* ─── TAB 1: LIVE METRICS EDITOR ─── */}
        {activeTab === "metrics" && (
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 0.4rem" }}>
                Live Website Numbers
              </h2>
              <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: 0 }}>
                Edit any stat below and click "Save Changes". The website will reflect these numbers instantly across the globe.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {/* Hero Stats */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--clr-gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                  1. Hero Banner Stats
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Years Experience:
                    </label>
                    <input
                      type="text"
                      value={metrics.years_experience}
                      onChange={(e) => handleMetricChange("years_experience", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Brands Launched:
                    </label>
                    <input
                      type="text"
                      value={metrics.brands_launched}
                      onChange={(e) => handleMetricChange("brands_launched", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Revenue Driven:
                    </label>
                    <input
                      type="text"
                      value={metrics.revenue_driven}
                      onChange={(e) => handleMetricChange("revenue_driven", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Films Created:
                    </label>
                    <input
                      type="text"
                      value={metrics.films_created}
                      onChange={(e) => handleMetricChange("films_created", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Beyond Numbers Section */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--clr-gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                  2. "Beyond Numbers" Section Stats
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Growth Acceleration:
                    </label>
                    <input
                      type="text"
                      value={metrics.growth_acceleration}
                      onChange={(e) => handleMetricChange("growth_acceleration", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Reach Expansion / ROI:
                    </label>
                    <input
                      type="text"
                      value={metrics.roi_delivered}
                      onChange={(e) => handleMetricChange("roi_delivered", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Value Created:
                    </label>
                    <input
                      type="text"
                      value={metrics.value_created}
                      onChange={(e) => handleMetricChange("value_created", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block", marginBottom: "0.35rem" }}>
                      Client Retention:
                    </label>
                    <input
                      type="text"
                      value={metrics.client_retention}
                      onChange={(e) => handleMetricChange("client_retention", e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "8px",
                        padding: "0.7rem 0.9rem",
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button
                type="button"
                onClick={handleSaveMetrics}
                disabled={savingMetrics}
                style={{
                  backgroundColor: "var(--clr-gold)",
                  color: "#07090E",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.95rem 2rem",
                  fontSize: "0.9375rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: savingMetrics ? "not-allowed" : "pointer",
                  opacity: savingMetrics ? 0.7 : 1,
                  boxShadow: "0 8px 30px rgba(212, 160, 36, 0.35)",
                }}
              >
                {savingMetrics ? "Saving to Database..." : "Save All Numbers to Live Website"}
              </button>

              {saveSuccess && (
                <div style={{ color: "#34D399", fontSize: "0.875rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span>✓</span> Numbers Updated Successfully!
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── TAB 2: CLIENT INQUIRIES & LEADS ─── */}
        {activeTab === "leads" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 0.4rem" }}>
                  Client Inquiries ({inquiries.length})
                </h2>
                <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: 0 }}>
                  Incoming project leads from the website intake portal.
                </p>
              </div>

              {/* Status Filter */}
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {(["all", "new", "contacted", "closed"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setLeadFilter(filter)}
                    style={{
                      backgroundColor: leadFilter === filter ? "var(--clr-gold)" : "rgba(255, 255, 255, 0.06)",
                      color: leadFilter === filter ? "#07090E" : "#94A3B8",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.4rem 0.85rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {loadingLeads ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#94A3B8" }}>
                Loading inquiries from Supabase...
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div
                style={{
                  padding: "4rem 2rem",
                  textAlign: "center",
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  borderRadius: "12px",
                  border: "1px dashed rgba(255, 255, 255, 0.12)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📬</div>
                <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "1rem" }}>No inquiries matching this filter</div>
                <div style={{ color: "#64748B", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                  New leads will appear here automatically when submitted.
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {filteredInquiries.map((inq) => {
                  const dateStr = new Date(inq.created_at).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  });

                  return (
                    <div
                      key={inq.id}
                      style={{
                        backgroundColor: "rgba(15, 23, 42, 0.7)",
                        border: "1px solid rgba(255, 255, 255, 0.09)",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF" }}>
                              {inq.name}
                            </span>
                            {inq.company && (
                              <span style={{ fontSize: "0.8125rem", color: "#94A3B8" }}>
                                · {inq.company}
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: "0.8125rem", color: "#CBD5E1", marginTop: "0.25rem" }}>
                            {inq.email} · <span style={{ color: "#64748B" }}>{dateStr}</span>
                          </div>
                        </div>

                        {/* Status & Budget */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <span
                            style={{
                              backgroundColor: "rgba(212, 160, 36, 0.15)",
                              border: "1px solid rgba(212, 160, 36, 0.4)",
                              color: "var(--clr-gold)",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              padding: "0.3rem 0.75rem",
                              borderRadius: "6px",
                            }}
                          >
                            {inq.budget}
                          </span>

                          <select
                            value={inq.status}
                            onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                            style={{
                              backgroundColor: "rgba(10, 14, 24, 0.9)",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              borderRadius: "6px",
                              padding: "0.3rem 0.65rem",
                              color: inq.status === "new" ? "#34D399" : "#E2E8F0",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              cursor: "pointer",
                              outline: "none",
                            }}
                          >
                            <option value="new">● New Lead</option>
                            <option value="contacted">✓ Contacted</option>
                            <option value="closed">★ Deal Closed</option>
                          </select>
                        </div>
                      </div>

                      {/* Services Chips */}
                      {inq.selected_services && inq.selected_services.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                          {inq.selected_services.map((svc) => (
                            <span
                              key={svc}
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "4px",
                                padding: "0.2rem 0.55rem",
                                fontSize: "0.6875rem",
                                color: "#CBD5E1",
                              }}
                            >
                              {svc}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Client Brief Message */}
                      {inq.message && (
                        <div
                          style={{
                            backgroundColor: "rgba(10, 14, 24, 0.5)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            borderRadius: "8px",
                            padding: "0.85rem 1rem",
                            fontSize: "0.8125rem",
                            color: "#94A3B8",
                            lineHeight: "1.5",
                          }}
                        >
                          "{inq.message}"
                        </div>
                      )}

                      {/* Quick Communication Actions */}
                      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
                        <a
                          href={`mailto:${inq.email}?subject=Rocklike Techventures - Inquiry Response`}
                          style={{
                            backgroundColor: "rgba(212, 160, 36, 0.15)",
                            border: "1px solid rgba(212, 160, 36, 0.35)",
                            color: "var(--clr-gold)",
                            padding: "0.4rem 0.85rem",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          Reply via Email ✉
                        </a>

                        <button
                          type="button"
                          onClick={() => navigator.clipboard.writeText(inq.email)}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            color: "#94A3B8",
                            padding: "0.4rem 0.85rem",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          Copy Email Address
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
