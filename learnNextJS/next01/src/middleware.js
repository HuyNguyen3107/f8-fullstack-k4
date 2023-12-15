import { NextResponse } from "next/server";
const isLogin = true;
export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/admin") && !isLogin) {
    const urlLogin = `${request.nextUrl.origin}/login`;
    return NextResponse.redirect(urlLogin);
  }
  const userAgent = request.headers.get("user-agent");
  const method = request.method;
  const url = request.url;
  const accept = request.headers.get("accept");
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get("status");
  const query = searchParams.get("query");
  const cookie = request.headers.get("cookie");
  const username = request.cookies.get("username");
  const email = request.cookies.get("email");
  console.log(username, email);
  const response = NextResponse.next();
  response.headers.set("x-api-key", "a hi hi");
  response.headers.set("Set-Cookie", "phone=0968972916;path=/;httpOnly");
  // response.cookies.set({
  //   name: "phone",
  //   value: "0987654321",
  //   path: "/",
  //   httpOnly: true,
  //   maxAge: 86400,
  // });
  response.cookies.delete("phone");
  return response;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // "/admin/:path*",
    // "/login/:path*",
    // "/register/:path*",
  ],
};
