import { NextRequest, NextResponse } from "next/server";
import { addSubscriber, type SubscribeSource } from "@/lib/subscribers";

const VALID_SOURCES: SubscribeSource[] = ["notify", "home", "article", "footer", "the-camp"];

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const { email, source } = (body ?? {}) as { email?: unknown; source?: unknown };

  if (typeof email !== "string") {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }

  const safeSource: SubscribeSource = VALID_SOURCES.includes(source as SubscribeSource)
    ? (source as SubscribeSource)
    : "notify";

  const result = await addSubscriber(email, safeSource);

  if (!result.ok) {
    return NextResponse.json(result, { status: 422 });
  }

  return NextResponse.json(result, { status: 200 });
}
