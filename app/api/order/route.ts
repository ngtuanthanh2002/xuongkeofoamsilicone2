import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, pkg } = body ?? {};

    if (!name || !phone || !address || !pkg) {
      return NextResponse.json(
        { ok: false, message: "Thiếu thông tin bắt buộc." },
        { status: 400 }
      );
    }

    // TODO: kết nối với CRM / Google Sheet / email khi deploy.
    console.log("[ORDER]", { name, phone, address, pkg, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Yêu cầu không hợp lệ." },
      { status: 400 }
    );
  }
}
