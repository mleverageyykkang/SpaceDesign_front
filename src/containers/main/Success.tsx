import React from "react";
import Image from "next/image";
import styles from "./Success.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Success = ({}) => {
  return (
    <div id="success" className={styles.section}>
      <h6>
        다양한 프로젝트
        <br className="m_br" /> 성공사례
      </h6>
      <Swiper
        className={styles.swiper}
        spaceBetween={12}
        slidesPerView={"auto"}
      >
        <SwiperSlide>
          <Image src="/images/main_17.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_18.png" width={870} height={590} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/main_19.png" width={870} height={590} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Success;
