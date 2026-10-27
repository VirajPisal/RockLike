import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://cohqgsramhifwhvndcsp.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_Uniu4vQWcKGr_0kaUNtNpA_v2d3nZZY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  selected_services: string[];
  budget: string;
  message?: string;
}

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
