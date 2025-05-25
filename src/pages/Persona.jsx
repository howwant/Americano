import React from "react";
import Persona_01 from "@/assets/img/Persona/Persona_01.jpeg";

const Persona = () => {
  return (
    <div className=" common">
      <div className="title">
        <h3>이런 사람, 이런 다이어트</h3>
        <p>누구에게, 어떤 이유로, 어떤 식단을 추천하는지</p>
        <p>상황별 최적의 식단을 찾아보세요.</p>
      </div>
      <img src={Persona_01} alt="Persona_01" />
    </div>
  );
};

export default Persona;
