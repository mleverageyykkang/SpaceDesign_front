import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // 실제 로그인 로직 처리 (예: DB에서 사용자 검증)
  if (username === "admin" && password === "12341234") {
    // 로그인 성공 시, 인증 토큰을 쿠키에 저장
    return NextResponse.json({ message: "로그인 성공" }, {
      status: 200,
      headers: {
        'Set-Cookie': 'auth_token=your-auth-token; Path=/; HttpOnly; SameSite=Strict;',
      },
    });
  } else {
    return NextResponse.json({ message: "잘못된 로그인 정보" }, { status: 401 });
  }
}