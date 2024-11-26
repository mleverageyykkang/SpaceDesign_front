import React from "react";
import Image from "next/image";
import styles from "./MiddleBanner.module.scss";

const MiddleBanner = ({}) => {
  return (
    <div id="middleBanner" className={styles.section}>
      <div className={styles.flex}>
        <div>
          <h6>
            <b>스페이스디자인</b>으로,
          </h6>
          <p>
            당신의 공간, 이제 일상 속<br className="m_br" /> 특별함이 시작되는
            곳으로
            <br className="m_br" /> 새롭게 태어납니다.
          </p>
        </div>
        <Image src="/images/main_20.png" width={160} height={160} alt="" />
      </div>
    </div>
  );
};

export default MiddleBanner;
