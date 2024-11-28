import { NextRequest, NextResponse } from "next/server";

// 미들웨어에서 로그인 여부 확인 후 리디렉션
export function middleware(request: NextRequest) {
  const url = request.url;
  const isLoggedIn = !!request.cookies.get("auth_token"); // 예시로 'auth_token' 쿠키로 로그인 상태 확인

  // /admin 경로로 접근할 때 로그인하지 않았다면 로그인 페이지로 리디렉션
  if (url.includes("/admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", url));
  }

  // 로그인했다면 대시보드로 리디렉션 (원하는 경로로 수정 가능)
  if (url.includes("/admin/dashboard") && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/dashboard", url));
  }

  return NextResponse.next();
}

// 미들웨어 적용 경로
export const config = {
  matcher: ["/admin/*", "/admin/dashboard"], // admin 경로에만 미들웨어를 적용
};