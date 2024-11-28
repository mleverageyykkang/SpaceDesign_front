"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "./adminSidebar";
import Link from "next/link";

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
      // router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!isAuthenticated) {
  //   return (
  //     <p> 로딩 중...</p> // 로딩 중 화면
  //   );
  // }

  const thead = [
    "No.",
    "문의 IP",
    "문의시간",
    "기기",
    "지역",
    "서비스 유형",
    "문의사항",
    "연락처",
    "상담사",
    "관리",
  ];
  const tbody = [
    "1",
    "00.000.00.00",
    "2024-11-24 11:08:59",
    "PC",
    "서울",
    "상가 인테리어",
    "상가 인테리어 문의",
    "01012345678",
    "counselor1",
    "삭제",
  ];
  return (
    <>
      {/* container */}
      <div style={{ height: "1000px" }}>
        {/* header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px #000 solid",
          }}
        >
          <h1>
            <Link href="/admin/dashboard">SpaceDesign</Link>
          </h1>
          <div>
            <button style={{ border: "1px #000 solid" }}>로그아웃</button>
          </div>
        </div>
        {/* main */}
        <div style={{ display: "flex" }}>
          {/* sidebar */}
          <AdminSidebar />
          {/* table */}
          <div style={{ flex: "5" }}>
            <h4>문의 내역</h4>
            <table style={{ width: "100%", border: "1px black solid" }}>
              <thead style={{ backgroundColor: "lightgrey" }}>
                <tr>
                  {thead.map((name) => (
                    <th key={name} scope="col">
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {tbody.map((name) => (
                    <th key={name} scope="col">
                      {name}
                    </th>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
