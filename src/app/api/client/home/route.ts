import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 외부 API 호출
    const response = await fetch("http://52.63.213.156:20221/client/home");
    if (!response.ok) {
      throw new Error("Failed to fetch admin data.");
    }

    // 외부 API 응답을 JSON으로 파싱
    const data = await response.json();

    // 성공적으로 가져온 데이터를 클라이언트에 반환
    return NextResponse.json(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // 에러 처리
    return NextResponse.json({ error: "Failed to fetch admin info." }, { status: 500 });
  }
}