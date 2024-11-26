"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 인증 여부를 쿠키나 로컬 스토리지에서 확인
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));
    if (!token) {
      // 로그인되지 않은 경우 로그인 페이지로 리디렉션
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <p>로딩 중...</p>; // 로딩 중 화면
  }

  return <h1>대시보드</h1>;
}
