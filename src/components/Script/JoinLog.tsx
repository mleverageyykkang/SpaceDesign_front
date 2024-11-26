"use client";
import { useEffect } from "react";

const JoinLog = () => {
  useEffect(() => {
    // 스크립트 삽입: hpt_trace_info 변수 설정
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      var hpt_trace_info = {'_mode': 'join', '_memid': ''};
    `;
    document.head.appendChild(script);

    // 정리 함수: 컴포넌트가 언마운트될 때 스크립트 삭제
    return () => {
      document.head.removeChild(script);
    };
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 마운트될 때만 실행되도록 함

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default JoinLog;
