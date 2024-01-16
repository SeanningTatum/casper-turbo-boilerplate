import { renderTrpcPanel } from "trpc-panel";
import { NextResponse } from "next/server";

import { appRouter } from "api";

function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return "";
  }

  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3001}`;
}

export function GET(): NextResponse {
  return new NextResponse(
    renderTrpcPanel(appRouter, {
      url: `${getBaseUrl()}/api/trpc`,
    }),
    {
      headers: { "content-type": "text/html" },
    }
  );
}
