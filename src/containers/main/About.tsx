import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

const About = ({}) => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.top}>
        <div className={styles.topImg}>
          <Image src="/images/main_3.png" width={278} height={124} alt="" />
        </div>
        <div className={styles.topText}>
          <h6>스페이스디자인</h6>
          <p>
            우리는 단순히 공간을 꾸미는 것이 아닙니다.
            <br />
            일상이 특별한 순간으로 변할 수 있도록 돕습니다.
            <br />
            <br />
            매일을 더 빛나게 만드는 인테리어는 <br className="m_br" /> 공간에서
            시작됩니다.
            <br />
            <br />
            사무실, 상점, 카페, 그리고 고객님이
            <br className="m_br" /> 소중하게 여기는 그 어떤 공간도,
            <br />
            저희가 특별하게 변화시켜 드리겠습니다.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <h6>
          총 경력 32년의
          <br className="m_br" /> 인테리어 전문가
        </h6>
        <div className={styles.bottomFlex}>
          <div>
            <Image src="/images/main_4.png" width={400} height={490} alt="" />
            <div>
              <h6>인테리어 전문가</h6>
              <h5>김 준 서</h5>
              <p>
                · 인테리어 감리사 경력 15년
                <br />· 인테리어 시공 횟수 1100건+
              </p>
            </div>
          </div>

          <div>
            <Image src="/images/main_5.png" width={400} height={490} alt="" />
            <div>
              <h6>3D 설계 디자이너</h6>
              <h5>유 태 현</h5>
              <p>
                · 3D 디자인 경력 17년 <br />· 3D 공간 시공 횟수 1300건+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
