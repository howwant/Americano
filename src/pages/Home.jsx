import { mainBanners, s_img } from "@/assets/img/bannerData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // 클릭된 이미지 index

  // 클릭된 startIndex에 따라 pop 배열을 가져옴
  const currentPopList = s_img[startIndex]?.pop || [];

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
          <img src={mainBanners[0]} alt="메인 배너1" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={mainBanners[1]}
            alt="메인 배너2"
            onClick={() => navigate("/dietTest")}
            style={{ cursor: "pointer" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={mainBanners[2]}
            alt="메인 배너3"
            onClick={() => navigate("/about/whyWeMadeIt")}
            style={{ cursor: "pointer" }}
          />
        </SwiperSlide>
      </Swiper>
      <h3 className="sub-title">17가지 식단, 한눈에 보기</h3>
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
              alt={`작은 배너 ${idx + 1}`}
              onClick={() => {
                setStartIndex(idx);
                setIsFullScreen(true);
              }}
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 전체화면 Swiper: 클릭된 작은 배너의 pop 리스트를 보여줌 */}
      {isFullScreen && currentPopList.length > 0 && (
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
            aria-label="닫기"
          >
            ✕
          </button>

          {/* 전체화면용 Swiper: currentPopList 배열을 순회 */}
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            style={{ width: "90%", height: "90%" }}
            className="Swiper3"
          >
            {currentPopList.map((popImgSrc, popIdx) => (
              <SwiperSlide key={popIdx}>
                <img
                  src={popImgSrc}
                  alt={`팝업 이미지 ${popIdx + 1}`}
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
