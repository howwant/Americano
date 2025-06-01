import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dietQuestions } from "@/config";

// 이미지 맵핑
import SC01A from "@/assets/img/TestQuestion/1_SC_01_A.png";
import SC01B from "@/assets/img/TestQuestion/1_SC_01_B.png";
import SC02A from "@/assets/img/TestQuestion/1_SC_02_A.png";
import SC02B from "@/assets/img/TestQuestion/1_SC_02_B.png";
import SC03A from "@/assets/img/TestQuestion/1_SC_03_A.png";
import SC03B from "@/assets/img/TestQuestion/1_SC_03_B.png";

import UP01A from "@/assets/img/TestQuestion/2_UP_01_A.png";
import UP01B from "@/assets/img/TestQuestion/2_UP_01_B.png";
import UP02A from "@/assets/img/TestQuestion/2_UP_02_A.png";
import UP02B from "@/assets/img/TestQuestion/2_UP_02_B.png";
import UP03A from "@/assets/img/TestQuestion/2_UP_03_A.png";
import UP03B from "@/assets/img/TestQuestion/2_UP_03_B.png";

import RI01A from "@/assets/img/TestQuestion/3_RI_01_A.png";
import RI01B from "@/assets/img/TestQuestion/3_RI_01_B.png";
import RI02A from "@/assets/img/TestQuestion/3_RI_02_A.png";
import RI02B from "@/assets/img/TestQuestion/3_RI_02_B.png";
import RI03A from "@/assets/img/TestQuestion/3_RI_03_A.png";
import RI03B from "@/assets/img/TestQuestion/3_RI_03_B.png";

import TS01A from "@/assets/img/TestQuestion/4_TS_01_A.png";
import TS01B from "@/assets/img/TestQuestion/4_TS_01_B.png";
import TS02A from "@/assets/img/TestQuestion/4_TS_02_A.png";
import TS02B from "@/assets/img/TestQuestion/4_TS_02_B.png";
import TS03A from "@/assets/img/TestQuestion/4_TS_03_A.png";
import TS03B from "@/assets/img/TestQuestion/4_TS_03_B.png";

const imageMap = {
  SC01A,
  SC01B,
  SC02A,
  SC02B,
  SC03A,
  SC03B,
  UP01A,
  UP01B,
  UP02A,
  UP02B,
  UP03A,
  UP03B,
  RI01A,
  RI01B,
  RI02A,
  RI02B,
  RI03A,
  RI03B,
  TS01A,
  TS01B,
  TS02A,
  TS02B,
  TS03A,
  TS03B,
};

const DietTest = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const updatedAnswers = [...answers, value];
    setAnswers(updatedAnswers);

    if (current < dietQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      const traitScores = {
        S: 0,
        C: 0,
        U: 0,
        P: 0,
        R: 0,
        I: 0,
        T: 0,
        S2: 0,
      };

      updatedAnswers.forEach((val) => {
        if (traitScores.hasOwnProperty(val)) {
          traitScores[val] += 1;
        }
      });

      const finalType = [
        traitScores.S >= traitScores.C ? "S" : "C",
        traitScores.U >= traitScores.P ? "U" : "P",
        traitScores.R >= traitScores.I ? "R" : "I",
        traitScores.T >= traitScores.S2 ? "T" : "S",
      ].join("");

      navigate(`/dietTest-result/${finalType}`);
    }
  };

  const imgFnc = (img) => imageMap[img] || null;

  const q = dietQuestions[current];

  return (
    <div className="DietTest Test">
      <div className="bg-red">
        <div className="bg-brown">
          <div className="title-sec">
            <p>{q.title}</p>
            <h3>{q.question}</h3>
          </div>
          <div className="con">
            {q.options.map((opt, idx) => (
              <div key={idx} onClick={() => handleAnswer(opt.value)}>
                <img src={imgFnc(opt.img)} alt="이미지" />
              </div>
            ))}
          </div>
          <div className="btns">
            <button onClick={() => handleAnswer(q.options[0].value)}>A</button>
            <button onClick={() => handleAnswer(q.options[1].value)}>B</button>
          </div>
        </div>
        <div className="footer">
          <span></span>
          <p>DIET 테스트</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default DietTest;
