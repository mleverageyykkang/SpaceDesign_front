import React from "react";
import Image from "next/image";
import styles from "./Review.module.scss";

const Review = ({}) => {
  return (
    <div id="Review" className={styles.section}>
      <h6>
        스페이스디자인
        <br className="m_lt_br" /> 리뷰후기
      </h6>
      <div className={styles.boxLeft}>
        <Image
          className={styles.pcImg}
          src="/images/main_14.png"
          width={1200}
          height={390}
          alt=""
        />
        <Image
          className={styles.moImg}
          src="/images/m_main_2.png"
          width={1200}
          height={390}
          alt=""
        />
        <div>
          <h6>고객 리뷰 01 | 김○수 &#40;카페 사장님 &#41;</h6>
          <p>
            &#34;공간에 맞는 세심한 디자인을 제안해 주셨고,
            <br />
            <b>
              덕분에 고객들도 &#39;여기 너무 예쁘다&#39;고
              <br />
              자주 말해주셔서 정말 만족스럽습니다.
            </b>
            <br />
            카페의 분위기가 훨씬 더 따뜻하고 특별해졌어요.
            <br />더 많은 사람들이 오고 싶어하는 공간이 된 것 같아 <br />
            너무 감사드립니다!&#34;
          </p>
        </div>
      </div>

      <div className={styles.boxRight}>
        <Image
          className={styles.pcImg}
          src="/images/main_15.png"
          width={1200}
          height={390}
          alt=""
        />
        <Image
          className={styles.moImg}
          src="/images/m_main_3.png"
          width={1200}
          height={390}
          alt=""
        />
        <div>
          <h6>고객 리뷰 02 | 이○희 &#40;자영업자 &#41;</h6>
          <p>
            &#34;처음에 인테리어를 어떻게 해야 할지 고민 많았는데,
            <br />
            전문가분들 덕분에 고민이 싹 사라졌어요. <br />
            <b>
              공간에 대한 깊은 이해와 제 스타일을 반영한 <br />
              맞춤형 디자인으로 매일이 즐겁습니다.
            </b>
            <br />
            정말 신경써서 작업해주신 게 느껴지고, <br />
            멋진 공간을 만들어 주셔서 정말 감사해요!&#34;
          </p>
        </div>
      </div>

      <div className={styles.boxLeft}>
        <Image
          className={styles.pcImg}
          src="/images/main_16.png"
          width={1200}
          height={390}
          alt=""
        />
        <Image
          className={styles.moImg}
          src="/images/m_main_4.png"
          width={1200}
          height={390}
          alt=""
        />
        <div>
          <h6>고객 리뷰 03 | 박○호 &#40;회사 CEO &#41;</h6>
          <p>
            &#34;사무실을 리모델링했는데,
            <b>
              디자인부터 시공까지 <br />
              모든 과정에서 완벽하게 지원해 주셨습니다.
            </b>
            <br />
            직원들이 일하는 환경이 훨씬 밝고 편안해져서 <br />
            업무 효율이 높아진 것 같아요. 전문가의 손길로 <br />
            이렇게 큰 변화를 경험하니 정말 만족스럽고, <br />
            앞으로도 추가 공간에 대해서도 맡기고 싶습니다!&#34;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
