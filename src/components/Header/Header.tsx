"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [typeMobile, setTypeMobile] = useState(false);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // mobile
      setTypeMobile(true);
    } else {
      // desktop
      setTypeMobile(false);
    }
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <Image src="/images/logo.png" width={218} height={52} alt="" />
        <nav className={styles.nav}>
          <Link href="#about">소개</Link>
          <Link href="#service">시공서비스</Link>
          <Link href="#Review">리뷰후기</Link>
          <Link href="#estimate">상담문의</Link>
        </nav>
        <div className={styles.menu}>
          <Image
            style={{ display: typeMobile ? "none" : "block" }}
            src="/images/menu.png"
            width={28}
            height={28}
            alt=""
          />
          <a
            href="tel:050-8202-1310"
            style={{ display: typeMobile ? "flex" : "none" }}
          >
            <Image src="/images/icon_call.png" width={28} height={28} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
