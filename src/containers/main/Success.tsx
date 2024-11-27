import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css'; // Swiper 기본 CSS
import styles from "./Success.module.scss";

const Success = ({}) => {
  return (
    <div id="success" className={styles.section}>
      <h6>
        다양한 프로젝트
        <br className="m_br" /> 시공사례
      </h6>
      <Swiper
        className={styles.swiper}
        spaceBetween={12} // 슬라이드 간 간격 제거
        slidesPerView={"auto"} // 화면에 여러 슬라이드 표시
        loop={true} // 무한 루프 활성화
        speed={15000} // 매우 느린 전환 속도 (20초)
        autoplay={{
          delay: 0, // 멈춤 없이 연속 재생
          disableOnInteraction: false, // 사용자 조작 후에도 autoplay 유지
        }}
        modules={[Autoplay]} // Autoplay 모듈 등록
      >
        <SwiperSlide>
          <Image src="/images/main_slide_1.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_2.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_3.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_4.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_5.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_6.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_7.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_8.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_9.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_slide_10.png" width={870} height={590} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Success;
