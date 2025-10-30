"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.css";

export default function Banner() {
  const banners = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];

  useEffect(() => {
    const styleId = "banner-swiper-styles";

    // 이미 스타일이 있으면 추가하지 않음
    if (document.getElementById(styleId)) {
      return;
    }

    // 새 스타일 추가
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .banner_container .swiper-pagination {
        bottom: 30px;
        display: flex;
        justify-content: center;
        gap: 8px;
      }

      .banner_container .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 100%;
        opacity: 1;
      }

      .banner_container .swiper-pagination-bullet-active {
        background: #ffffff;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className={`${styles.banner} banner_container`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.swiper}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image
              src={banner}
              alt={`banner ${index + 1}`}
              width={0}
              height={0}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
