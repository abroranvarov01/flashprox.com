import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "mateminco-flashlight-outdoor-portable-emergency",
  "workpro-rechargeable-flashlight-ultra-compact",
  "trixhub-rechargeable-flashlights-linternas-emergencies",
  "bushnell-headlamp-rubicon-battery-hunting",
  "consciot-dimmable-water-resistant-flashlight-emergency",
  "darkbeam-rechargeable-ultraviolet-flashlights-fluorescent",
  "acebeam-flashlight-rechargeable-flashlights-searchlight",
  "zewdov-aluminum-waterproof-rechargeable-headlight",
  "victoper-flashlight-flashlights-waterproof-emergency",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://greenrecycleliving.co")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("green", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/live"],
};
