"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // 여기서 로그인 API를 호출해서 로그인 상태를 확인
    const response = await fetch("/api/admin/token", {
      method: "POST",
      body: JSON.stringify({ username, password }),
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
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      {error && <p>{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button type="submit" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
}
