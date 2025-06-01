import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import Grade_c_img from "@/assets/img/LowCarb/grade_c.png";
import Grade_f_img from "@/assets/img/LowCarb/grade_f.png";
import GM_01 from "@/assets/img/dietPlan/GM_01.png";
import SwitchOn_01 from "@/assets/img/dietPlan/SwitchOn_01.png";
import SwitchOn_02 from "@/assets/img/dietPlan/SwitchOn_02.png";

const HealthFirst = () => {
  return (
    <div className="common">
      <div className="title">
        <h3>살 빼는게 아니라 고통 버티는 중</h3>
        <p>짧은 시간 내 </p>
        <p>체중을 많이 감량하는 식단</p>
      </div>

      <TabView>
        <TabPanel header="원푸드">
          <div className="title-sub">
            <p>원푸드</p>
            <img src={Grade_f_img} alt="Grade_f_img" />
          </div>

          <b>살을 빼는 것도 중요하지만, 내 몸을 지키는 게 더 중요해요.</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              단일 식품만 먹으며 하루 600~900kcal로 버티는 극단적인 식단이에요.
            </p>
            <p>대표적으로 고구마, 양배추 등이 자주 사용돼요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실!</h4>
            <p>하루 섭취 열량이 워낙 낮기 때문에 체중은 빠르게 줄어요.</p>
            <p>초기엔 수분 손실로 인한 급격한 체중 감소 착시도 있어요.</p>
            <p>
              예: 고구마는 GI(혈당지수)가 낮고 포만감이 높아 자주 사용됨
              <br />
              <small>
                (White Sweet Potato as Meal Replacement for Overweight
                White-Collar Workers: A Randomized Controlled Trial.Shih,
                Chun-Kuang et al.2019)
              </small>
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⚠️ 오래 하면 위험해요</h4>
            <p>
              같은 음식만 먹다 보면 폭식, 식사 강박 등 식이장애 위험이 있어요.
            </p>
            <p>
              단백질, 필수지방산 부족 → 면역력 저하, 탈모, 생리불순 발생 가능
            </p>
            <p>예: 고구마는 비타민 A, C는 풍부하지만 철, 칼슘, B12 부족</p>
            <p>양배추는 항산화 성분은 풍부하지만 단백질과 철분은 부족</p>
            <p>
              <small>
                (Mono Diet Review: Purpose, Benefits, and Side Effects.Rachael
                Ajmera. Nutrition. 2020 )
              </small>
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>😵‍💫 지속은 거의 불가능해요</h4>
            <p>
              지속적으로 같은 음식만 먹으면 입맛이 쉽게 물리고, 폭식 충동이
              생겨요.
            </p>
            <p>외식이나 가족 식사와의 병행도 거의 불가능해요.</p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>😓 너무 단순해서 오히려 위험해요</h4>
            <p>
              식단이 단순하면 좋을 것 같지만, 영양소 다양성 부족으로 오히려
              건강을 해칠 수 있어요.
            </p>
            <p>
              단백질, 지방, 주요 비타민이 빠지면 피로, 생리 기능 이상 등이 생길
              수 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>지속적인 허기감, 현기증, 피로가 자주 발생해요.</p>
            <p>단일 식품만 먹을 경우 소화 장애(가스, 변비, 설사)도 흔해요.</p>
            <p>
              예: 고구마 식단 → 섬유소 과다 섭취로 배에 가스가 찰 수 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              고구마·양배추 등은 식이섬유, 항산화 성분이 풍부해 장 기능 개선,
              포만감 증가에는 도움될 수 있어요.
            </p>
            <p>하지만 전체적으로 보면 효과는 단기적이고, 제한적이에요.</p>
            <p>
              <small>
                (Effect of mono and binary diets on growth and reproduction of
                cyclopoid copepod. Rasdi, Nadiah et al. 2018)
              </small>
            </p>
          </div>

          <b className="last-info">
            한두 끼 ‘단식’은 괜찮지만,
            <br />
            장기간 원푸드는 <strong>NO!</strong>
            <br />
            <strong>극단적인 제한식은 장기적으로 건강을 해칠 수 있어요.</strong>
          </b>
        </TabPanel>

        <TabPanel header="GM 다이어트">
          <div className="title-sub">
            <p>GM 다이어트</p>
            <img src={Grade_f_img} alt="Grade_f_img" />
          </div>

          <b>단 7일 만에 체중 감소와 해독을? 단기용 극저칼로리 식단!</b>

          <div className="body-con">
            <h4>📆 어떤 식단이에요?</h4>
            <p>
              1985년 General Motors사가 직원들의 건강 증진과 감량을 위해 개발한
              7일 식단이에요.
            </p>
            <p>
              요일별로 먹을 수 있는 식품군이 정해져 있고, 칼로리 제한 + 수분
              공급 + 섬유질 중심으로 구성돼 있어요.
            </p>
            <p>
              ✅ 과일, 채소, 고기, 바나나, 현미 등을 일정 순서로 섭취
              <br />❌ 커피, 설탕, 알코올은 금지 / 하루 물 8~12잔 필수
            </p>
          </div>
          <img src={GM_01} alt="GM_01" className="body-img" />

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실해요!</h4>
            <p>
              일주일 만에 체중 4~5kg, 간 지방까지 줄었다는 연구도 있어요.
              <br />
              <small>
                (Gupta, A. et al. 2023. General-motors diet: A quick fix for
                steatotic live liver donors.)
              </small>
            </p>
            <p>탄수화물 고갈과 수분 손실 → 지방 연소 구조로 설계돼 있어요.</p>
            <p>글리코겐 고갈 → 지방산 산화 증가 → 간 내 지방 제거</p>
            <p>
              해독 효과, 장 기능 개선, 위장 안정화 등의 효과도 일부 기대돼요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 금물!</h4>
            <p>식단이 매일 바뀌지만 자유도가 낮고, 단백질·지방이 부족해요.</p>
            <p>
              특히 초반 3일은 탄수화물과 채소 위주라 에너지 부족과 피로가
              심해요.
            </p>
            <p>
              카페인·설탕·알코올 금지 등 지켜야 할 규칙이 많아 정신적 피로도
              커요.
            </p>
          </div>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>
              초반 3일은 단백질과 지방 섭취가 거의 없어 탄단지 균형이 깨지기
              쉬워요.
            </p>
            <p>
              후반에 살코기가 추가되긴 하지만 전반적으로 영양소 다양성은
              부족해요.
            </p>
            <p>정해진 식품만 먹어야 하므로 지루함과 자유도 부족이 문제예요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              간 지방과 체중은 빠르게 줄 수 있지만, 심혈관 지표나 염증 개선은
              제한적이에요.
            </p>
            <p>장기 지속 시 근손실, 기초대사량 저하, 요요현상 가능성이 커요.</p>
            <p>저혈당, 허기, 탈수, 변비 등을 경험한 사례도 보고돼 있어요.</p>
            <p>
              <small>
                (Can you lose weight with the 7-day GM diet?. Medically reviewed
                by Katherine Marengo LDN, R.D. Nutrition. 2019)
              </small>
            </p>
          </div>

          <b className="last-info">
            살을 빼는 것도 중요하지만, <strong>몸의 균형은 더 중요해요.</strong>
            <br />
            일주일 단기 처방은 괜찮지만,{" "}
            <strong>오래 지속하긴 무리예요.</strong>
            <br />
            극단적인 제한은 잠깐만!{" "}
            <strong>장기적으로는 건강을 해칠 수 있어요.</strong>
          </b>
        </TabPanel>

        <TabPanel header="스위치온">
          <div className="title-sub">
            <p>스위치온</p>
            <img src={Grade_c_img} alt="Grade_c_img" />
          </div>

          <b>살 빼는 것도 좋지만, 대사 회복이 먼저예요.</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              ‘스위치온 다이어트’는 박용우 박사가 고안한 단계적 대사 회복
              프로그램이에요.
            </p>
            <p>
              체중 감량뿐 아니라 인슐린·렙틴 민감성 회복, 대사 유연성 증진까지
              노리는 전략적인 식단이에요.
            </p>
            <p>
              단백질 셰이크 → 간헐적 단식 → 식사 습관 교육으로 점진적으로 식단을
              바꾸는 게 핵심이에요.
            </p>
          </div>
          <img src={SwitchOn_01} alt="SwitchOn_01" className="body-img" />

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실!</h4>
            <p>
              탄수화물을 줄이면 글리코겐 고갈 + 지방 연소 활성화가 빠르게
              일어나요.
            </p>
            <p>
              4주간 실천 시 체중·체지방 감량뿐 아니라 피로 감소, 혈당 안정화도
              보고돼 있어요.
              <br />
              <small>(박용우, 2018, 『지방대사 켜는 스위치온 다이어트』)</small>
            </p>
            <p>케톤체 생성과 렙틴 민감도 회복도 주요 효과 중 하나예요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 구조가 체계적이라 지속 가능!</h4>
            <p>초기에는 단백질 셰이크 중심 → 이후 균형식 식사로 전환돼요.</p>
            <p>
              탄수화물과 단식 비율을 조절할 수 있어 개인 상태에 맞게 유연하게
              실천 가능해요.
            </p>
            <p>
              <strong>1~4주 점진적 구조</strong> 덕분에 정신적 부담이 적고,
              비교적 오래 유지할 수 있어요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 주의할 점은요?</h4>
            <p>초기에는 케토 플루(두통, 피로감 등) 증상이 나타날 수 있어요.</p>
            <p>
              단백질 셰이크 위주 식사 시, 미량영양소 보충제를 꼭 함께 섭취해야
              해요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              인슐린·렙틴 민감도 개선은 요요 방지와 대사 증후군 예방에
              효과적이에요.
            </p>
            <p>당뇨병 위험 감소 가능성도 함께 기대할 수 있어요.</p>
          </div>
          <img src={SwitchOn_02} alt="SwitchOn_02" />

          <b className="last-info">
            굶지 말고, 단계적으로 식습관을 바꿔보세요.
            <br />
            스위치온처럼 <strong>천천히, 하지만 확실하게!</strong>
          </b>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default HealthFirst;
