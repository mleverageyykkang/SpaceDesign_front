import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Intro.module.scss";

const Intro = ({}) => {
  return (
    <div id="intro" className={styles.section}>
      <div className={styles.flex}>
        <div className={styles.textBox}>
          <h6>
            매일의 순간을
            <br className="m_br" /> 더 빛나게,
            <br />
            <span>당신만의 공간</span>
            <br className="m_br" />을 완성합니다.
          </h6>
          <p>
            고민은 저희가 하겠습니다. <br />
            수백건의 시공 경험으로,
            <br className="m_br" />
            공간을 선사드리겠습니다.
          </p>
          <Link href="#estimate">무료 견적 받기</Link>
        </div>

        <div>
          <Image src="/images/main_1.png" width={420} height={504} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
