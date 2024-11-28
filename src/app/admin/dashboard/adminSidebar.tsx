"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function adminSidebar() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        borderRight: "1px black solid",
        height: "1000px",
        gap: "5px",
      }}
    >
      <div>
        <Link href="/admin/dashboard">문의 내역</Link>
      </div>
      <div>
        <Link href="/admin/dashboard">상담사 관리</Link>
      </div>
    </div>
  );
}
