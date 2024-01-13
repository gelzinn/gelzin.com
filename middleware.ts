import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/github")
    return NextResponse.redirect("https://github.com/gelzinn");
}
