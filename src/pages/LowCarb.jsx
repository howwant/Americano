import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import Grade_a_img from "@/assets/img/LowCarb/grade_a.png";
import Grade_b_img from "@/assets/img/LowCarb/grade_b.png";
import Grade_c_img from "@/assets/img/LowCarb/grade_c.png";
import Grade_d_img from "@/assets/img/LowCarb/grade_d.png";
import Grade_f_img from "@/assets/img/LowCarb/grade_f.png";
import LowCarb_01 from "@/assets/img/LowCarb/LowCarb_01.png";
import LowCarb_02 from "@/assets/img/LowCarb/LowCarb_02.png";
import LowCarb_03 from "@/assets/img/LowCarb/LowCarb_03.png";

const LowCarb = () => {
  return (
    <div className="LowCarb common">
      <div className="title">
        <h3>탄수화물 악당을 물리쳐라!</h3>
        <p>체내 인슐린 분비를 낮추고</p>
        <p>지방 연소를 유도하는 식단</p>
      </div>

      <TabView>
        <TabPanel header="저탄수화물">
          <div className="title-sub">
            <p>저탄수화물</p>
            <img src={Grade_c_img} alt="Grade_c_img" />
          </div>

          <b>탄수화물 줄이고 건강하게 지방 태우기!</b>
          <div className="body-con">
            <h4>🍚 어떤 식단이에요?</h4>
            <p>
              탄수화물 섭취를 줄이고, 단백질과 지방을 주요 에너지원으로 사용하는
              식이요법이에요.
            </p>
            <p>
              보통 하루 전체 열량 중 탄수화물을 100그람 이하 혹은 총 칼로리의
              20% 수준으로 제한하고, 그만큼 단백질과 지방 섭취 비율을 높이는
              방식이에요.
            </p>
            <p>
              탄수화물이 줄면 혈당과 인슐린 분비수치가 낮아지고, 이로 인해 지방
              분해와 산화가 촉진돼요.
            </p>
            <p>
              단백질이 너무 부족하거나, 지방만 과도하게 섭취하면 영양 불균형이
              될 수 있으므로, 단백질:지방 균형을 고려한 구성이 중요해요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실!</h4>
            <p>
              탄수화물이 줄면 체내 저장된 글리코겐과 수분이 빠르게 소모되면서
              1~2주 내 체중 감소가 눈에 띄게 나타날 수 있어요.
            </p>
            <p>
              체중 감량 뿐만 아니라 3-6개월 유지시, 혈당, 혈압, 혈중지질 개선에
              효과적이에요.
            </p>
            <p>
              고탄수화물 식단 대비 200-300kcal 더 많은 에너지를 소모할 수 있다는
              연구결과도 있어요!
            </p>
          </div>
          <img src={LowCarb_01} alt="LowCarb_01" className="body-img" />
          <caption>
            (Oh, Robert, Brian Gilani, and Kalyan R. Uppaluri. Low-Carbohydrate
            Diet. StatPearls Publishing, 2024.)
          </caption>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 상황 따라 달라요.</h4>
            <p>
              식품 선택의 폭이 좁아져 외식이나 사회적 식사 자리에서 제약이 생길
              수 있고,
            </p>
            <p>
              처음 시작 시 두통, 무기력감(=저탄수 증후군) 등의 증상도 생길 수
              있어요.
            </p>
            <p>
              고단백+저탄수화물 식단은 신장에 부담을 줄 수 있어, 신장 질환자는
              주의해야해요!
            </p>
            <p>
              하지만 탄수화물 제한 강도를 조절하면서 지속 가능한 방법을 찾는다면
              유지도 충분히 가능해요!
            </p>
            <p>
              예: 적당저탄(Moderate low-carb) 식단
              <br />
              →하루 탄수화물 100~150g 범위
            </p>
          </div>
          <Divider></Divider>
          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>극단적으로 탄수화물을 제한할 경우 식이섬유 섭취 부족</p>
            <p> → 변비, 장 건강 악화</p>
            <p>
              {" "}
              - 비타민 B군, 칼륨, 마그네슘 등 수용성 영양소 결핍 위험 장기간
              과도한 지방 섭취는 심혈관 부담을 줄 수도 있어요.
            </p>
          </div>
          <Divider></Divider>
          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>혈당 조절, 인슐린 감수성 향상</p>
            <p>
              중성지방, LDL 콜레스테롤 감소 → 심혈관 건강 개선
              <br />
              NAFLD(비알코올성 지방간) 개선, 대사증후군 위험 감소 일정 수준
              이하의 탄수화물 섭취 시, 케톤체 생성 → 지방 연소 촉진
            </p>
          </div>

          <b className="last-info">
            탄수화물만 줄여도 체중 변화가 생겨요. 혈당 조절과 포만감 유지에 꽤
            효과적이에요. 하지만 지나친 제한은 영양 불균형을 부를 수 있어요!
          </b>
        </TabPanel>
        <TabPanel header="황제 다이어트">
          <div className="title-sub">
            <p>황제 다이어트</p>
            <img src={Grade_d_img} alt="Grade_d_img" />
          </div>

          <b>고기만 먹는 극단적 저탄수 다이어트!</b>
          <div className="body-con">
            <h4>🥓 어떤 식단이에요?</h4>
            <p>
              ‘황제처럼’ 먹는다고 하지만 실제로는 탄수화물을 20g 미만으로
              줄이고, 지방과 단백질 위주의 식사만 하는 극단적 저탄수화물
              식단이에요.
            </p>
            <p>
              탄수화물 섭취량이 100g 이하로 떨어지면 체내 글리코겐이 고갈되며,
              케톤체가 생성되고 지방 분해가 활성화돼요.
            </p>
            <p>
              이 과정을 ‘케토시스(ketosis)’라고 불러요. 케톤증 유도 + 수분
              손실을 통해 체중이 빠르게 줄 수 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 강력해요!</h4>
            <p>케톤체 에너지 전환이 빠르게 이뤄져 지방 연소가 활발해져요.</p>
            <p>
              글리코겐 고갈로 인해 수분이 빠져나가 체중이 급격히 감소할 수
              있어요.
            </p>
            <p>식욕 억제 효과도 있어 식사량이 자연스럽게 줄기도 해요.</p>
            <p>
              단, 수분 손실이 많아 단기 감량 효과가 실제보다 과대평가될 수
              있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 매우 어려운 편이에요.</h4>
            <p>
              탄수화물 제한이 너무 극단적이라 외식이나 사회적 식사에 큰 제약이
              있어요.
            </p>
            <p>지속적인 케톤증 상태는 신장에 부담을 줄 수 있어요.</p>
            <p>
              심혈관계 부담, 요요현상, 영양 불균형 가능성이 높아 장기 지속은
              매우 어려워요.
            </p>
            <p>
              따라서 극단적 방식보다는 **적절한 저탄수화물 식단으로의 전환**이
              권장돼요.
            </p>
          </div>
          <Divider></Divider>
          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>소변량 증가 → 탈수 및 전해질 불균형 위험</p>
            <p>피로, 두통, 근육 경련, 어지럼증 (케토 플루 증상)</p>
            <p>섬유질 부족 → 심한 변비와 위장 불편</p>
            <p>
              장기 지속 시 신장 기능 저하 및 지방·단백질 과잉 섭취로 간·신장에
              부담 가능
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>케톤체를 에너지로 활용하여 지방 대사가 활성화될 수 있어요.</p>
            <p>
              공복 혈당, 인슐린 수치 개선에 도움을 줄 수 있고,
              <br />
              일부 연구에서는 NAFLD, 제2형 당뇨 개선 가능성도 보고돼 있어요.
            </p>
            <p>
              다만, 장기적인 안전성은 검증이 부족하며, 반드시 전문가 상담 후
              실천하는 것이 바람직해요.
            </p>
          </div>

          <b className="last-info">
            고기만 먹어도 살이 빠지는 듯 보여요.
            <br />
            단기간 감량엔 강력하지만, 누구에게나 맞진 않아요.
            <br />
            장기적으로는 <strong>영양 불균형과 부작용</strong> 꼭 조심해야 해요!
          </b>
        </TabPanel>
        <TabPanel header="키토제닉">
          <div className="title-sub">
            <p>키토제닉</p>
            <img src={Grade_c_img} alt="Grade_c_img" />
          </div>

          <b>탄수화물과 단백질을 줄이고, 지방을 주 에너지원으로!</b>
          <div className="body-con">
            <h4>🍳 어떤 식단이에요?</h4>
            <p>
              탄수화물 20~50g 이하, 단백질도 제한하고 지방 섭취를 크게 늘리는
              극단적 식단이에요.
            </p>
            <p>
              탄수화물도, 단백질도 줄이니 몸은 지방을 주요 에너지원으로
              사용하고, 이때 생성되는 케톤체를 활용하게 돼요.
            </p>
            <p>
              원래는 1920년대 간질 치료를 위해 개발되었지만, 최근에는 체중 감량,
              혈당 조절, 항염 효과 등으로 다시 주목받고 있어요.
            </p>
          </div>
          <img src={LowCarb_02} alt="LowCarb_02" className="body-img" />

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 강력해요!</h4>
            <p>
              탄수화물 제한으로 글리코겐이 고갈되고 수분이 빠지며 체중이 빠르게
              줄어요.
            </p>
            <p>
              케톤체는 식욕 억제 호르몬에 영향을 주어 배고픔도 줄어드는 효과가
              있어요.
            </p>
            <p>
              인슐린 민감도가 향상되어 혈당 안정화, 대사 개선에도 효과가 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 까다로워요.</h4>
            <p>
              탄단지 비율을 엄격히 맞춰야 해서 식단 구성과 유지가 매우 어려워요.
            </p>
            <p>
              탄수화물과 단백질 모두를 제한해야 하기 때문에 사회생활이나
              외식에서 큰 스트레스가 될 수 있어요.
            </p>
            <p>
              식단이 조금만 흐트러져도 요요가 쉽게 올 수 있어 대부분은 단기
              실천(3개월 이내)이 권장돼요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>두통, 어지럼증, 피로감, 탈수 (→ 케토 플루 증상)</p>
            <p>영양 불균형, 변비, 근육량 감소, 콜레스테롤 변화 가능성</p>
            <p>
              신장·간·췌장 질환자는 절대 피해야 하며, 보충제 복용과 정기적인
              의학적 관리가 필수예요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>인슐린 저항성 개선, 혈당 안정화, 중성지방 및 염증 감소 효과</p>
            <p>장내 미생물 조성 개선, 항염·항산화 유전자 발현 조절</p>
            <p>일부 암세포(포도당 의존형)의 성장 억제 가능성도 보고됨</p>
            <p>
              (Dowis, Kathryn, and Simran Banga. The Potential Health Benefits
              of the Ketogenic Diet: A Narrative Review)
            </p>
            <p>
              → 단, 장기적 안정성은 아직 논란 중으로, 반드시 전문가 상담 후
              실천해야 해요.
            </p>
            <img src={LowCarb_03} alt="LowCarb_03" className="body-img" />
          </div>

          <b className="last-info">
            탄수화물과 단백질을 줄이고 지방으로 에너지를 바꿔요.
            <br />
            체중 감량과 혈당 조절에 강력한 효과를 보여요.
            <br />
            하지만 <strong>영양 불균형과 장기 부작용</strong>은 꼭 주의해야
            해요!
          </b>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default LowCarb;
