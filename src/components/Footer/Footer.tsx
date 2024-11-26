"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
			<p className={styles.caption}><b>*광고 영업 전화 시 업무방해 관련 네이버/카카오 본사 영업사원 및 대행사 신고합니다</b></p>
      <div className={styles.footerWrap}>
        <div>
					
          <Image src="/images/ft_logo.png" width={218} height={52} alt="" />
          <p>
            회사명 : 스페이스디자인 대표자 : 홍우주 <br />
            사업자소재지 : 인천광역시 미추홀구 주안동로 25번길 3,
            <br className="m_br" /> 1층 101호(주안동)
            <br />
            사업자등록번호 : 310-10-23781
            <br />
            대표번호 : 050-8202-1310
            <br />
            이메일주소 : krkdy@mleverage.co.kr
          </p>
        </div>
        <div>
          <p>© 스페이스디자인 All rights reserved.</p>
        </div>
      </div>

      <div className={styles.fixedLink}>
        <Link href="#EstimateForm">
          <Image
            src="/images/icon_customer.png"
            width={20}
            height={20}
            alt=""
          />
        </Link>
        <Link href="tel:050-8202-1310">
          <Image src="/images/icon_call.png" width={20} height={20} alt="" />
        </Link>
      </div>
    </footer>
  );
}
