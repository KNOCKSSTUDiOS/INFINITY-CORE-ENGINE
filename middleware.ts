import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const response = createClient(request);

  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  const protectedRoutes = ["/todos", "/profile"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    const supabase = createClient(request);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      url.pathname = "/auth/sign-in";
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
