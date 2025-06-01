import React from "react";
import About_01 from "@/assets/img/About/About_01.png";
import About_02 from "@/assets/img/About/About_02.jpeg";

const WhyWeMadeIt = () => {
  return (
    <div className="WhyWeMadeIt">
      <img src={About_01} alt="자기소개1" />
      <img src={About_02} alt="자기소개2" />
    </div>
  );
};

export default WhyWeMadeIt;
