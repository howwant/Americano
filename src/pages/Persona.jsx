import React from "react";
import Persona_01 from "@/assets/img/Persona/Persona_01.jpeg";
import Persona_02 from "@/assets/img/Persona/Persona_02.jpg";
import Persona_03 from "@/assets/img/Persona/Persona_03.jpg";
import Persona_04 from "@/assets/img/Persona/Persona_04.jpg";
import Persona_05 from "@/assets/img/Persona/Persona_05.jpg";
import Persona_06 from "@/assets/img/Persona/Persona_06.jpg";
import Persona_07 from "@/assets/img/Persona/Persona_07.jpg";
import Persona_08 from "@/assets/img/Persona/Persona_08.jpg";
import Persona_09 from "@/assets/img/Persona/Persona_09.jpg";
import { TabView, TabPanel } from "primereact/tabview";

const Persona = () => {
  const PersonaImgs = [
    {
      url: Persona_01,
      name: "수험생",
    },
    {
      url: Persona_02,
      name: "갱년기 여성",
    },
    {
      url: Persona_03,
      name: "여행준비",
    },
    {
      url: Persona_04,
      name: "사회초년생",
    },
    {
      url: Persona_05,
      name: "실패 경험자",
    },
    {
      url: Persona_06,
      name: "다이어트 강박",
    },
    {
      url: Persona_07,
      name: "육아맘",
    },
    {
      url: Persona_08,
      name: "20대 남성",
    },
    {
      url: Persona_09,
      name: "30대 남성",
    },
  ];
  return (
    <div className="Persona">
      <div className="common">
        <div className="title">
          <h3>이런 사람, 이런 다이어트</h3>
          <p>누구에게, 어떤 이유로, 어떤 식단을 추천하는지</p>
          <p>상황별 최적의 식단을 찾아보세요.</p>
        </div>
      </div>
      <TabView scrollable className="tabs">
        {PersonaImgs.map((img, idx) => (
          <TabPanel header={img.name} key={idx}>
            <img src={img.url} alt={`${img.name}`} />
          </TabPanel>
        ))}
      </TabView>
    </div>
  );
};

export default Persona;
