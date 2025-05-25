import banner1 from "@/assets/img/banner1.jpeg";
import banner2 from "@/assets/img/banner2.jpeg";
import s_banner1 from "@/assets/img/small_banner/small_banner_01.PNG";
import s_banner2 from "@/assets/img/small_banner/small_banner_02.PNG";
import s_banner3 from "@/assets/img/small_banner/small_banner_03.PNG";
import s_banner4 from "@/assets/img/small_banner/small_banner_04.PNG";
import s_banner5 from "@/assets/img/small_banner/small_banner_05.PNG";
import s_banner6 from "@/assets/img/small_banner/small_banner_06.PNG";
import s_banner7 from "@/assets/img/small_banner/small_banner_07.PNG";
import s_banner8 from "@/assets/img/small_banner/small_banner_08.PNG";
import s_banner9 from "@/assets/img/small_banner/small_banner_09.PNG";
import s_banner10 from "@/assets/img/small_banner/small_banner_10.PNG";
import s_banner11 from "@/assets/img/small_banner/small_banner_11.PNG";
import s_banner12 from "@/assets/img/small_banner/small_banner_12.PNG";
import s_banner13 from "@/assets/img/small_banner/small_banner_13.PNG";
import s_banner14 from "@/assets/img/small_banner/small_banner_14.PNG";
import s_banner15 from "@/assets/img/small_banner/small_banner_15.PNG";
import s_banner16 from "@/assets/img/small_banner/small_banner_16.PNG";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
const Home = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // 클릭된 이미지 index

  const s_img = [
    { src: s_banner1 },
    { src: s_banner2 },
    { src: s_banner3 },
    { src: s_banner4 },
    { src: s_banner5 },
    { src: s_banner6 },
    { src: s_banner7 },
    { src: s_banner8 },
    { src: s_banner9 },
    { src: s_banner10 },
    { src: s_banner11 },
    { src: s_banner12 },
    { src: s_banner13 },
    { src: s_banner14 },
    { src: s_banner15 },
    { src: s_banner16 },
  ];

  return (
    <div className="Home">
      {/* 기본 배너 슬라이드 */}
      <Swiper
        className="Swiper1"
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} />
        </SwiperSlide>
      </Swiper>

      {/* 작은 배너 슬라이드 */}
      <Swiper
        className="Swiper2"
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {s_img.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={item.src}
              onClick={() => {
                setStartIndex(idx);
                setIsFullScreen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 전체화면 Swiper */}
      {isFullScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={() => setIsFullScreen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              fontSize: "2rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            ✕
          </button>

          {/* 전체화면용 Swiper */}
          <Swiper
            initialSlide={startIndex}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            style={{ width: "90%", height: "90%" }}
            className="Swiper3"
          >
            {s_img.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={item.src}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;
