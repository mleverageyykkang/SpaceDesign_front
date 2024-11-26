import React from "react";
import Image from "next/image";
import styles from "./Service.module.scss";

const Service = ({}) => {
  return (
    <div id="service" className={styles.section}>
      <h6 className={styles.title}>
        당신의 공간,
        <br className="m_br" /> 새로움을 만나다
        <br />
        상담부터 견적 모두 무료
      </h6>

      <div className={styles.top}>
        <div>
          <div className={styles.topBox}>
            <div className={styles.imgBox}>
              <Image src="/images/main_6.png" width={90} height={90} alt="" />
            </div>
            <div className={styles.textBox}>
              <h6>리모델링</h6>
              <h5>
                새로운 변화를 위한
                <br className="m_lt_br" /> 공간 재탄생
              </h5>
              <p>
                오래된 공간에 새로운 변화를 선물하세요.
                <br className="m_lt_br" /> 더 효율적이고
                <br className="pc_lt_br" />
                아름다운 공간으로 <br className="m_lt_br" />
                다시 태어날 수 있도록 돕겠습니다.
              </p>
            </div>
          </div>

          <div className={styles.topBox}>
            <div className={styles.imgBox}>
              <Image src="/images/main_7.png" width={90} height={90} alt="" />
            </div>
            <div className={styles.textBox}>
              <h6>창업</h6>
              <h5>
                첫 시작을 돕는
                <br className="m_lt_br" /> 맞춤형 공간 설계
              </h5>
              <p>
                창업의 설렘을 담아, 당신의 비즈니스가
                <br className="m_lt_br" /> 빛날 수 있도록
                <br className="pc_lt_br" />
                세심한 공간을 완성해 드립니다.
                <br className="m_lt_br" /> 성공의 첫 걸음을 저희와 함께하세요.
              </p>
            </div>
          </div>

          <div className={styles.topBox}>
            <div className={styles.imgBox}>
              <Image src="/images/main_8.png" width={90} height={90} alt="" />
            </div>
            <div className={styles.textBox}>
              <h6>개인 부분 공사</h6>
              <h5>
                당신의 일상을
                <br className="m_lt_br" /> 빛낼 맞춤 시공
              </h5>
              <p>
                작은 변화가 큰 행복을 가져다줍니다.
                <br className="m_lt_br" /> 일상 속 특별한 순간들을
                <br className="pc_lt_br" />더 빛나게 해 줄
                <br className="m_lt_br" /> 세심한 시공으로, 당신만의 공간을
                완성해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomBox}>
          <Image src="/images/main_9.png" width={200} height={245} alt="" />
          <h6>
            무료 견적
            <br className="m_lt_br" /> 신청
          </h6>
        </div>

        <div className={styles.bottomBox}>
          <Image src="/images/main_10.png" width={200} height={245} alt="" />
          <h6>
            1:1 전문가
            <br className="m_lt_br" /> 상담
          </h6>
        </div>

        <div className={styles.bottomBox}>
          <Image src="/images/main_11.png" width={200} height={245} alt="" />
          <h6>
            맞춤 전문가
            <br className="m_lt_br" /> 배정
          </h6>
        </div>
        <div className={styles.bottomBox}>
          <Image src="/images/main_12.png" width={200} height={245} alt="" />
          <h6>
            미팅 및 견적
            <br className="m_lt_br" /> 제안
          </h6>
        </div>
        <div className={styles.bottomBox}>
          <Image src="/images/main_13.png" width={200} height={245} alt="" />
          <h6>공사 시작</h6>
        </div>
      </div>
    </div>
  );
};

export default Service;
