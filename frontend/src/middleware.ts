import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasToken = cookies().has("nextauth.token");

  if (
    !hasToken &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/register")
  ) {
    return Response.redirect(new URL("/login", request.url));
  }

  if (
    hasToken &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register"))
  ) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.svg$).*)"],
};
