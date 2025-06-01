import React from "react";
import DietTest_img from "@/assets/img/DietTest/main_banner.gif";
import { useNavigate } from "react-router-dom";

const DietTest = () => {
  const navigate = useNavigate();
  return (
    <div className="DietTest common">
      <div className="title">
        <h3>DIET 테스트</h3>
        <p>식습관, 실행력, 의지력, 스타일을 분석해</p>
        <p>가장 알맞은 다이어트 방법을 추천합니다.</p>
        <img
          src={DietTest_img}
          alt="main_banner"
          onClick={() => navigate("/dietTest-test")}
        />
      </div>
    </div>
  );
};

export default DietTest;
