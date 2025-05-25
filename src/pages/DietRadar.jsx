import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DietTestList } from "@/config"; // DietTestList를 JSON 객체로 불러온다고 가정

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

const getImageSrc = (image) => {
  switch (image) {
    case "small_banner_01":
      return s_banner1;
    case "small_banner_02":
      return s_banner2;
    case "small_banner_03":
      return s_banner3;
    case "small_banner_04":
      return s_banner4;
    case "small_banner_05":
      return s_banner5;
    case "small_banner_06":
      return s_banner6;
    case "small_banner_07":
      return s_banner7;
    case "small_banner_08":
      return s_banner8;
    case "small_banner_09":
      return s_banner9;
    case "small_banner_10":
      return s_banner10;
    case "small_banner_11":
      return s_banner11;
    case "small_banner_12":
      return s_banner12;
    case "small_banner_13":
      return s_banner13;
    case "small_banner_14":
      return s_banner14;
    case "small_banner_15":
      return s_banner15;
    case "small_banner_16":
      return s_banner16;
    default:
      return null;
  }
};
const DietRadar = () => {
  const [selectedOption1, setSelectedOption1] = useState(DietTestList[0]);
  const [selectedOption2, setSelectedOption2] = useState(DietTestList[1]);

  const renderDietInfo = (diet, key) => {
    if (!diet) return null;

    const {
      name,
      subTitle,
      image,
      shortTerm,
      longTerm,
      access,
      safety,
      sustain,
      benefit,
      variety,
      calorieLimit,
    } = diet;

    const textMap = {
      shortTerm,
      longTerm,
      access,
      safety,
      sustain,
      benefit,
      variety,
      calorieLimit,
    };

    const renderList = (text) =>
      text
        ?.split("\n")
        .filter((line) => line.trim() !== "")
        .map((line, idx) => <li key={idx}>{line}</li>);

    if (key === "image") {
      return <img src={getImageSrc(image)} alt={name} />;
    } else if (key === "name") {
      return (
        <>
          <p className="title">{name}</p>
          <p className="title-sub">{subTitle}</p>
        </>
      );
    } else {
      return <ul>{renderList(textMap[key])}</ul>;
    }
  };

  const getDietByCode = (code) => DietTestList.find((d) => d.code === code);

  return (
    <div className="DietRadar common">
      <div className="title">
        <h3>어떤 식단이 내 몸에 더 잘 맞을까?</h3>
        <p>두 식단을 골라 비교해보세요.</p>
        <p>과학이 판정해드립니다.</p>
      </div>

      <div className="colums">
        <div className="w-50">
          <Dropdown
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.value)}
            options={DietTestList}
            optionLabel="name"
            placeholder="비교할 항목1"
          />
        </div>
        <div className="w-50">
          <Dropdown
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.value)}
            options={DietTestList}
            optionLabel="name"
            placeholder="비교할 항목2"
          />
        </div>
      </div>

      {[
        { label: "이미지", key: "image" },
        { label: "타이틀", key: "name" },
        { label: "단기효과성", key: "shortTerm" },
        { label: "장기효과성", key: "longTerm" },
        { label: "접근성 (유지난이도)", key: "access" },
        { label: "안전성 (부작용)", key: "safety" },
        { label: "실행 지속가능성", key: "sustain" },
        { label: "추가적인 건강효과", key: "benefit" },
        { label: "식단 다양성", key: "variety" },
        { label: "칼로리 제한 수준", key: "calorieLimit" },
      ].map(({ label, key }) => (
        <div key={key} className="con">
          {label !== "이미지" && label !== "타이틀" && (
            <h4 className="con-title">{label}</h4>
          )}
          <div className={`${label !== "이미지" && "bg"} colums`}>
            <div className="w-50">
              {renderDietInfo(getDietByCode(selectedOption1?.code), key)}
            </div>
            <div className="w-50">
              {renderDietInfo(getDietByCode(selectedOption2?.code), key)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DietRadar;
