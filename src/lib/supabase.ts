import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://cohqgsramhifwhvndcsp.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_Uniu4vQWcKGr_0kaUNtNpA_v2d3nZZY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  selected_services: string[];
  budget: string;
  message?: string | null;
  status: string;
  created_at: string;
}

export interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  selected_services: string[];
  budget: string;
  message?: string;
}

export interface SiteMetrics {
  years_experience: string;
  brands_launched: string;
  revenue_driven: string;
  films_created: string;
  growth_acceleration: string;
  client_retention: string;
  value_created: string;
  roi_delivered: string;
}

export const DEFAULT_METRICS: SiteMetrics = {
  years_experience: "09+",
  brands_launched: "300+",
  revenue_driven: "₹ 1 crore+",
  films_created: "1,200+",
  growth_acceleration: "+120%",
  client_retention: "98%",
  value_created: "120 lakhs",
  roi_delivered: "260%",
};

export async function submitInquiry(payload: InquiryPayload) {
  try {
    const { error } = await supabase
      .from("inquiries")
      .insert([
        {
          name: payload.name.trim(),
          email: payload.email.trim(),
          company: payload.company?.trim() || null,
          selected_services: payload.selected_services,
          budget: payload.budget,
          message: payload.message?.trim() || null,
          status: "new",
        },
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Network error";
    console.error("Unexpected submission error:", err);
    return { success: false, error: errorMessage };
  }
}

export async function fetchSiteMetrics(): Promise<SiteMetrics> {
  try {
    const { data, error } = await supabase
      .from("site_metrics")
      .select("id, value");

    if (error || !data || data.length === 0) {
      return DEFAULT_METRICS;
    }

    const metricsMap = { ...DEFAULT_METRICS };
    for (const item of data) {
      if (item.id in metricsMap) {
        (metricsMap as unknown as Record<string, string>)[item.id] = item.value;
      }
    }
    return metricsMap;
  } catch (err) {
    console.warn("Using default metrics:", err);
    return DEFAULT_METRICS;
  }
}

export async function updateSiteMetric(id: string, value: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("site_metrics")
      .update({ value, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error(`Failed to update metric ${id}:`, error);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`Error updating metric ${id}:`, err);
    return false;
  }
}

export async function fetchAllInquiries(): Promise<InquiryRecord[]> {
  try {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch inquiries:", error);
      return [];
    }
    return (data as InquiryRecord[]) || [];
  } catch (err) {
    console.error("Error fetching inquiries:", err);
    return [];
  }
}

export async function updateInquiryStatus(id: string, status: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("inquiries")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Failed to update inquiry status:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error updating inquiry status:", err);
    return false;
  }
}
