import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import Grade_b_img from "@/assets/img/LowCarb/grade_b.png";
import Flexi_01 from "@/assets/img/dietPlan/Flexi_01.png";

const Flexitarian = () => {
  return (
    <div className="LowCarb common">
      <div className="title">
        <h3>고기를 좋아하는 채식주의자</h3>
        <p>채소 중심 식단을 따르되</p>
        <p> 고기도 포기 못하는 사람들</p>
      </div>

      <div style={{ padding: 10 }}>
        <div className="title-sub">
          <p>플렉시테리언</p>
          <img src={Grade_b_img} alt="Grade_b_img" />
        </div>
        <b>채식처럼 먹되, 필요할 땐 고기도 OK!</b>

        <div className="body-con">
          <h4>🥗 어떤 식단이에요?</h4>
          <p>
            식물성 식품을 기본으로 하되, 상황에 따라 고기·생선·유제품·달걀도
            소량 포함하는 유연한 반채식 식단이에요.
          </p>
          <p>
            ✅ 채소, 과일, 통곡물, 콩류, 견과류 중심
            <br />
            ➕ 고기나 동물성 식품도 소량·선택적으로 포함
            <br />❌ 고기·가공육 중심 식사는 지양
          </p>
        </div>
        <img src={Flexi_01} alt="Flexi_01" className="body-img" />

        <Divider></Divider>

        <div className="body-con">
          <h4>👍 단기 효과는 꽤 괜찮아요!</h4>
          <p>포만감과 식이섬유 섭취가 늘어나 식사량이 자연스럽게 줄어요.</p>
          <p>단백질, 비타민, 무기질을 균형 있게 섭취할 수 있어요.</p>
          <p>고기 섭취만 줄여도 콜레스테롤·염증 수치 개선 효과가 보고돼요.</p>
          <p>
            체중, BMI, 혈당, 혈압 모두에서 긍정적 변화가 나타났다는 연구도
            있어요.
          </p>
          <p>
            <small>
              (Flexitarian Diets and Health: A Review of the Evidence-Based
              Literature, Emma J Derbyshire)
            </small>
          </p>
        </div>

        <Divider></Divider>

        <div className="body-con">
          <h4>⭐ 장기 유지는 매우 쉬운 편이에요.</h4>
          <p>유연한 구조 덕분에 실천율과 순응도가 매우 높아요.</p>
          <p>채식보다 부담이 적고, 식사 만족도는 더 높아요.</p>
          <p>식단의 다양성도 확보할 수 있어요.</p>
          <p>특히 청소년, 채식 초보자, 외식이 잦은 사람들에게 적합해요.</p>
          <p>‘완벽하지 않아도 꾸준히’ 실천 가능한 식단이에요.</p>
        </div>
        <Divider></Divider>
        <div className="body-con">
          <h4>🚨 부작용은 없을까요?</h4>
          <p>영양 결핍 위험은 낮은 편이에요 (동물성 식품 포함 덕분).</p>
          <p>
            하지만 다이어트 목적만의 제한 식사는 섭식 억제 행동으로 이어질 수
            있어요.
          </p>
          <p>
            청소년, 여성의 경우 심리적 스트레스가 동반될 수 있으므로 주의가
            필요해요.
          </p>
        </div>

        <Divider></Divider>

        <div className="body-con">
          <h4>🔎 건강에 도움 될 수도 있나요?</h4>
          <p>
            체중 감소, 대사 건강 개선, 당뇨 예방, 심혈관 질환 위험 감소 효과가
            보고돼요.
          </p>
          <p>장내 미생물 다양성 증가, 염증 수치 감소 효과도 있어요.</p>
          <p>일부 연구에서는 암 예방 가능성도 언급되고 있어요.</p>
          <p>식사에 대한 만족감과 지속성이 높아지는 것도 큰 장점이에요.</p>
        </div>

        <b className="last-info">
          채식보다 더 현실적이고, 일반식보다 더 건강한 중간 지점!
          <br />
          <strong>지속 가능한 건강 습관으로 최고 평가 받는 식단</strong>
        </b>
      </div>
    </div>
  );
};

export default Flexitarian;
