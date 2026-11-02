"use server";

export async function submitToGHL(formData: FormData) {
  const name = (formData.get("name") || formData.get("fullName")) as string;
  const email = (formData.get("email") || formData.get("workEmail")) as string;
  const phone = (formData.get("phone") || formData.get("phoneNumber")) as string;
  const businessName = (formData.get("businessName") || formData.get("institutionName")) as string;
  const website = formData.get("website") as string;
  const service = (formData.get("service") || formData.get("institutionType")) as string;
  const budget = (formData.get("budget") || formData.get("monthlyBudget")) as string;
  const goal = (formData.get("goal") || formData.get("message")) as string;
  const decisionMaker = (formData.get("decisionMaker") || formData.get("designation")) as string;

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  const [firstName, ...lastNames] = name.trim().split(" ");
  const lastName = lastNames.join(" ");

  const apiKey = process.env.GHL_API_KEY || "pit-e2362ed0-eb61-4dd3-99ee-1e8f09f534a3";
  const locationId = process.env.GHL_LOCATION_ID || "yGbhAVCKG9Ao2bblzUC8";

  if (!apiKey || !locationId) {
    console.error("GHL API Key or Location ID is missing");
    return { success: false, error: "Configuration error." };
  }

  // Map the extra form fields to tags so they show up in GHL
  const tags = ["digital marketing", "Higher Education", "Performance Ads"];
  if (service) tags.push(service);

  try {
    const payload: Record<string, any> = {
      locationId,
      firstName,
      name: name.trim(),
      email,
      source: "Landing Page Form",
      tags,
    };

    if (lastName) payload.lastName = lastName;
    if (phone) payload.phone = phone;
    if (businessName) payload.companyName = businessName;
    if (website) payload.website = website;

    const customFields: Array<{ key: string; field_value: string }> = [];
    if (service) customFields.push({ key: "service_needed", field_value: service });
    if (budget) customFields.push({ key: "monthly_marketing_budget", field_value: budget });
    if (decisionMaker) customFields.push({ key: "the_decision_maker_for_marketing_services", field_value: decisionMaker });
    if (goal) customFields.push({ key: "message", field_value: goal });

    if (customFields.length > 0) {
      payload.customFields = customFields;
    }

    const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("GHL API Error:", errorText);
      return { success: false, error: `CRM Error: ${errorText}` };
    }

    return { success: true };
  } catch (err: any) {
    console.error("GHL Submission Exception:", err);
    return { success: false, error: `Exception: ${err?.message || "Unknown error"}` };
  }
}

