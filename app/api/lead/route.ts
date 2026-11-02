import { NextRequest, NextResponse } from "next/server";
import { submitToGHL } from "@/app/actions/ghl";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    const formData = new FormData();

    if (contentType.includes("application/json")) {
      const json = await req.json();
      for (const [key, val] of Object.entries(json)) {
        if (val !== undefined && val !== null) {
          formData.append(key, String(val));
        }
      }
    } else {
      const incoming = await req.formData();
      for (const [key, val] of incoming.entries()) {
        formData.append(key, val);
      }
    }

    const result = await submitToGHL(formData);
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to process lead" },
      { status: 500 }
    );
  }
}

