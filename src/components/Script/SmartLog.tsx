"use client";
import { useEffect } from "react";

const AddScripts = () => {
  useEffect(() => {
    // 스크립트 삽입 1: hpt_info 변수 설정
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      var hpt_info = {'_account': 'UHPT-29768', '_server': 'a28'};
    `;
    document.head.appendChild(script1);

    // 스크립트 삽입 2: 외부 JavaScript 파일 추가
    const script2 = document.createElement("script");
    script2.src = "//cdn.smlog.co.kr/core/smart.js";
    script2.charset = "utf-8";
    document.head.appendChild(script2);

    // noScript 태그 삽입
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <img src="//a28.smlog.co.kr/smart_bda.php?_account=29768" style="display:none;width:0;height:0;" border="0"/>
    `;
    document.body.appendChild(noscript);

    // 정리 함수: 컴포넌트가 언마운트될 때 스크립트 삭제
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.body.removeChild(noscript);
    };
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 마운트될 때만 실행되도록 함

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default AddScripts;
