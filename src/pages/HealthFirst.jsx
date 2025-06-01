import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import Grade_a_img from "@/assets/img/LowCarb/grade_a.png";
import Grade_b_img from "@/assets/img/LowCarb/grade_b.png";
import DASH_01 from "@/assets/img/dietPlan/DASH_01.png";
import MedDiet_01 from "@/assets/img/dietPlan/MedDiet_01.png";

const HealthFirst = () => {
  return (
    <div className="common">
      <div className="title">
        <h3>힐링하면서 살뺀다!</h3>
        <p>체중감량보다 혈압, 혈당 등</p>
        <p>건강지표개선 중심</p>
      </div>

      <TabView>
        <TabPanel header="DASH">
          <div className="title-sub">
            <p>DASH</p>
            <img src={Grade_a_img} alt="Grade_a_img" />
          </div>

          <b>혈압을 낮추고 건강을 높이는 과학적 식사법</b>

          <div className="body-con">
            <h4>🍎 어떤 식단이에요?</h4>
            <p>
              칼륨·마그네슘·칼슘·식이섬유가 풍부한 저염 식단이에요.
              <br />
              고혈압 예방을 목표로 만들어졌지만, 체중 감량, 당뇨, 심혈관 질환
              예방에도 효과적이에요.
            </p>
            <p>
              ✅ 과일·채소·통곡물·살코기 단백질·저지방 유제품
              <br />❌ 나트륨, 포화지방, 설탕, 가공식품은 최대한 제한
            </p>
          </div>
          <img src={DASH_01} alt="DASH_01" className="body-img" />

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 빠르게 나타나요!</h4>
            <p>
              시작 2주 이내에 혈압 감소가 보고됐어요.
              <br />
              <small>
                (Heart and Stroke Foundation of Canada. "The DASH Diet to Lower
                High Blood Pressure.")
              </small>
            </p>
            <p>소금 섭취를 줄일수록 효과는 더욱 강력해요.</p>
            <p>포만감 증가 + 에너지 밀도 감소 → 자연스러운 체중 감량 유도</p>
            <p>특히 과체중·고혈압 초기 단계 성인에게 효과가 뛰어나요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 꽤 쉬운 편이에요.</h4>
            <p>다양한 식품군이 포함돼 있어 식단 구성 난이도가 낮아요.</p>
            <p>식사 만족도도 높고, 포만감 유지에도 유리해요.</p>
            <p>
              단, 외식 시 나트륨 조절의 어려움, 조리 시간 부담, 소금 제한
              스트레스는 존재해요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>
              전반적으로 안전성이 매우 높고, 비타민·미네랄 결핍도 잘 보완된
              식단이에요.
            </p>
            <p>
              다만, 식이섬유 섭취가 증가하면서 초기엔 가스, 더부룩함, 복부
              팽만이 생길 수 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              고혈압, 제2형 당뇨, 심혈관질환, 대사증후군 예방에 효과적이에요.
            </p>
            <p>
              체중, BMI, 허리둘레 감소 효과도 RCT 및 메타분석에서 입증됐어요.
            </p>
            <p>
              염증 완화, 인슐린 저항성 개선, 혈중 지질 안정화 효과도 확인돼요.
            </p>
            <p>
              특히 칼륨·마그네슘·칼슘·항산화소의 조합은 대사 건강 전반에
              긍정적인 영향을 줘요.
            </p>
            <p>
              <small>
                (The effect of dietary approaches to stop hypertension (DASH)
                diet on weight and body composition in adults: A systematic
                review and meta-analysis of randomized controlled clinical
                trials, Soltani, Sepideh at al)
              </small>
            </p>
          </div>

          <b className="last-info">
            단기 효과도 강력하지만,
            <br />
            <strong>수년 간 실천해도 안전하고 효과적인 과학적 식단!</strong>
            <br />
            고혈압뿐 아니라 전체 대사 건강을 지키는 데 탁월해요.
          </b>
        </TabPanel>

        <TabPanel header="TLC">
          <div className="title-sub">
            <p>TLC</p>
            <img src={Grade_b_img} alt="Grade_b_img" />
          </div>

          <b>포화지방 줄이고 심장을 살리는 식단!</b>

          <div className="body-con">
            <h4>🥦 어떤 식단이에요?</h4>
            <p>
              미국 국립보건원(NIH)이 개발한 심혈관 건강 중심 식이요법이에요.
            </p>
            <p>
              포화지방과 콜레스테롤을 줄이고, 식이섬유·복합탄수화물·살코기 중심
              식사를 실천해요.
            </p>
            <p>
              ✅ 과일, 채소, 통곡물, 저지방 유제품, 살코기
              <br />❌ 튀김, 고지방 육류, 고지방 유제품, 가공식품
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 꽤 좋아요!</h4>
            <p>LDL 콜레스테롤이 20~30%까지 감소할 수 있어요.</p>
            <p>콜레스테롤 흡수 억제로 혈관 건강이 향상돼요.</p>
            <p>탄수화물 비중이 높아 체중 감소는 미미할 수 있지만,</p>
            <p>운동 병행 시 지방 산화가 촉진돼요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 비교적 쉬운 편이에요.</h4>
            <p>식품군 선택 폭이 넓어 실천에 부담이 적어요.</p>
            <p>정제 탄수화물만 잘 조절하면 건강한 체중 유지도 가능해요.</p>
            <p>
              규칙적인 식사와 주당 150분 운동을 병행하면 중성지방, 혈압, 체지방
              개선 효과도 기대돼요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>전반적으로 매우 안전한 식단이에요.</p>
            <p>다만 최근 연구에서는 몇 가지 한계도 지적돼요:</p>
            <p>식이 콜레스테롤 제한(달걀, 해산물 등)에 대한 재검토 필요</p>
            <p>탄수화물 비중이 높아 혈당·지질 이상 위험 존재</p>
            <p>
              일부 권장 칼로리(여성 1200kcal, 남성 1600kcal)는 부족할 수 있어요
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              LDL·중성지방 감소, HDL 유지, 혈압 완화, 당뇨 위험 감소 효과가
              있어요.
            </p>
            <p>간·심장·췌장 기능 회복, NAFLD 개선에도 효과가 보고됐어요.</p>
            <p>
              스트레스 완화, 기분 안정, 숙면 유도 등 정신건강에도 긍정적이에요.
            </p>
            <p>
              체중의 10%만 감량해도 콜레스테롤과 염증 지표가 크게 개선돼요.
              <br />
              섬유소·스테롤·운동의 조합이 콜레스테롤 흡수 억제 + 지방 대사
              최적화를 유도해요.
            </p>
            <p>
              <small>
                (Effect of therapeutic lifestyle changes on patients with
                overweight/obesity and non-alcoholic fatty liver disease: A
                randomized controlled trial, Huang, Xishun at al)
              </small>
            </p>
          </div>

          <b className="last-info">
            혈관 건강이 걱정된다면
            <br />
            <strong>TLC는 과학적으로 검증된 심장 건강 식단이에요.</strong>
            <br />
            실천도 어렵지 않아서 누구나 도전할 수 있어요!
          </b>
        </TabPanel>

        <TabPanel header="지중해식">
          <div className="title-sub">
            <p>지중해식</p>
            <img src={Grade_a_img} alt="Grade_a_img" />
          </div>

          <b>식물성 위주, 자연식 그대로! 오래 먹을수록 건강해지는 식단</b>

          <div className="body-con">
            <h4>🌾 어떤 식단이에요?</h4>
            <p>
              그리스·이탈리아 등 지중해 국가의 전통 식사법에서 유래한
              식단이에요.
            </p>
            <p>
              과일, 채소, 통곡물, 올리브오일, 생선, 견과류는 자주 먹고, 붉은
              고기, 가공식품, 포화지방은 최소화해요.
            </p>
            <p>
              자연식 위주의 저포화지방 + 고불포화지방 식단으로,
              채소·과일·통곡물·해산물 중심의 과학적으로 입증된 장수 식단이에요.
            </p>
          </div>
          <img src={MedDiet_01} alt="MedDiet_01" className="body-img" />

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과도 있어요!</h4>
            <p>
              단 6일 실천만으로도 혈중 건강 대사체 수치가 향상된다는 보고가
              있어요.
            </p>
            <p>식이섬유 풍부 + 포만감 증가 → 자연스러운 칼로리 제한 효과!</p>
            <p>
              혈당 변동 완화, 소화 속도 조절, 식후 포만감 유지 효과도 뛰어나요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 쉬운 편이에요.</h4>
            <p>
              식품 선택 폭이 넓고, 식문화에 친화적이라 사회적 실천이 용이해요.
            </p>
            <p>
              단백질·지방·탄수화물 균형이 뛰어나 장기 실천 시 건강 위험이
              낮아요.
            </p>
            <p>
              수년 이상 실천해도 효과가 지속되며, 심장병·당뇨·암·치매 등
              만성질환 위험 감소는 다수 연구로 입증됐어요.
            </p>
            <p>
              <small>
                (Impact of a short-term Mediterranean diet intervention on
                plasma metabolites: a pilot study, Smith E at al, 2024)
              </small>
            </p>
          </div>
          <Divider></Divider>
          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>전반적으로 부작용이 적지만, 몇 가지 주의점이 있어요.</p>
            <p>붉은 육류 제한 시 여성은 철분 결핍에 유의해야 해요.</p>
            <p>올리브오일과 견과류 과잉 섭취 시 열량 과다 위험이 있어요.</p>
            <p>
              해산물·견과 알레르기나 섬유질 과다로 인한 복부 팽만도 주의 필요.
            </p>
            <p>
              염분이 포함된 식품(치즈, 올리브 등)은 고혈압 환자에겐 불리할 수
              있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>심혈관 질환, 제2형 당뇨, 대사증후군 예방에 효과적이에요.</p>
            <p>
              폴리페놀, 오메가-3, 비타민 E 등 항산화·항염증 작용을 유도해요.
            </p>
            <p>
              장내 미생물 환경 개선, 정신 건강 유지에도 긍정적인 영향을 줘요.
            </p>
            <p>HDL 증가, 중성지방 감소, 체중 유지 효과도 입증됐어요.</p>
          </div>

          <b className="last-info">
            <strong>단기에도 좋지만,</strong>
            <br />
            <strong>수년 이상 실천 시 더 빛나는 식단이 바로 MedDiet!</strong>
          </b>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default HealthFirst;
