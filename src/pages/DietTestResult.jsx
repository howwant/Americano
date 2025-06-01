import { useNavigate, useParams } from "react-router-dom";
import SURT from "@/assets/img/TestResult/SURT.png";
import SURS from "@/assets/img/TestResult/SURS.jpg";
import SUIT from "@/assets/img/TestResult/SUIT.jpg";
import SUIS from "@/assets/img/TestResult/SUIS.jpg";
import SPRT from "@/assets/img/TestResult/SPRT.jpg";
import SPRS from "@/assets/img/TestResult/SPRS.jpg";
import SPIT from "@/assets/img/TestResult/SPIT.jpg";
import SPIS from "@/assets/img/TestResult/SPIS.jpg";
import CURT from "@/assets/img/TestResult/CURT.jpg";
import CURS from "@/assets/img/TestResult/CURS.jpg";
import CUIT from "@/assets/img/TestResult/CUIT.jpg";
import CUIS from "@/assets/img/TestResult/CUIS.jpg";
import CPRT from "@/assets/img/TestResult/CPRT.jpg";
import CPRS from "@/assets/img/TestResult/CPRS.jpg";
import CPIT from "@/assets/img/TestResult/CPIT.jpg";
import CPIS from "@/assets/img/TestResult/CUIS.jpg";

import { Button } from "primereact/button";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";

const DietTestResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const imageMap = {
    SURT,
    SURS,
    SUIT,
    SUIS,
    SPRT,
    SPRS,
    SPIT,
    SPIS,
    CURT,
    CURS,
    CUIT,
    CUIS,
    CPRT,
    CPRS,
    CPIT,
    CPIS,
  };

  const imgFnc = (key) => {
    return imageMap[key] || null;
  };
  return (
    <div className="DietTestResult">
      <img src={imgFnc(id)} />
      <div className="btns">
        <Button severity="info" rounded onClick={() => navigate("/dietTest")}>
          <AiOutlineReload />
          테스트 다시하기
        </Button>
        <Button severity="info" rounded onClick={() => navigate("/")}>
          <AiOutlineHome />
          홈으로 이동
        </Button>
      </div>
    </div>
  );
};

export default DietTestResult;
