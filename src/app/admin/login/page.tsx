"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // 여기서 로그인 API를 호출해서 로그인 상태를 확인
    const response = await fetch("/api/admin/token", {
      method: "POST",
      body: JSON.stringify({ uid, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // 로그인 성공시 쿠키에 인증 정보를 설정하고 대시보드로 리디렉션
      document.cookie = "auth_token=your-auth-token; path=/"; // 예시로 쿠키에 auth_token 설정
      router.push("/admin/dashboard"); // 대시보드로 리디렉션
    } else {
      setError("로그인에 실패했습니다. 다시 시도해 주세요.");
      alert("로그인에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "1000px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px #000 solid",
          height: "300px",
          width: "400px",
        }}
      >
        <div style={{ textAlign: "center", borderBottom: "1px #000 solid" }}>
          <h1>로그인</h1>
        </div>
        <div style={{}}>
          {/* {error && <p>{error}</p>} */}

          <form
            style={{
              height: "200px",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ width: "100px" }}>
                <label htmlFor="">아이디</label>
              </div>
              <input
                type="text"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                placeholder="아이디"
                style={{ border: "1px #000 solid" }}
              />
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ width: "100px" }}>
                <label htmlFor="">비밀번호</label>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                style={{ border: "1px #000 solid" }}
              />
            </div>
            <button
              style={{
                border: "1px #000 solid",
                width: "150px",
                marginTop: "5px",
                padding: "5px",
              }}
              type="submit"
              onClick={handleLogin}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href={"/"}>메인으로 돌아가기</Link>
      </div>
    </div>
  );
}
