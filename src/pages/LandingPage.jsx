// src/pages/LandingPage.jsx
import { useEffect, useState } from "react";
import logoImage from "../assets/img/Logo.png"; // 로고 이미지 경로에 맞게 수정

export default function LandingPage() {
  const [fadeOut, setFadeOut] = useState(false);
  const [shrinkLogo, setShrinkLogo] = useState(false);

  useEffect(() => {
    // 1. 로고 축소 + 이동 시작 (1.5초 시점)
    const shrinkTimer = setTimeout(() => {
      setShrinkLogo(true);
    }, 1500);

    // 2. 전체 페이드아웃 (3초 후)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(shrinkTimer);
    };
  }, []);

  return (
    <div
      className={`landing-overlay ${fadeOut ? "fade-out" : ""}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        transition: "opacity 1s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: "none",
      }}
    >
      <img
        src={logoImage}
        alt="로고"
        className={`logo ${shrinkLogo ? "shrink" : ""}`}
        style={{
          width: shrinkLogo ? "150px" : "200px",
          position: "absolute",
          top: shrinkLogo ? "10px" : "50%",
          left: shrinkLogo ? "10px" : "50%",
          transform: shrinkLogo ? "translate(0, 0)" : "translate(-50%, -50%)",
          transition: "all 1s ease",
        }}
      />
    </div>
  );
}
