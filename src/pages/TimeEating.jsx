import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import Grade_b_img from "@/assets/img/LowCarb/grade_b.png";
import Grade_a_img from "@/assets/img/LowCarb/grade_a.png";
import Grade_c_img from "@/assets/img/LowCarb/grade_c.png";
import Grade_d_img from "@/assets/img/LowCarb/grade_d.png";
import Grade_f_img from "@/assets/img/LowCarb/grade_f.png";
import TimeEating01 from "@/assets/img/dietPlan/TimeEating01.png";
import TimeEating02 from "@/assets/img/dietPlan/TimeEating02.jpeg";

const TimeEating = () => {
  return (
    <div className="LowCarb common">
      <div className="title">
        <h3>밥 먹는 시간도 전략이다!</h3>
        <p>먹는 시간을 조절해 자연스럽게 섭취량 감소</p>
      </div>

      <TabView>
        <TabPanel header="16:8">
          <div className="title-sub">
            <p>16:8</p>
            <img src={Grade_b_img} alt="Grade_b_img" />
          </div>

          <b>먹는 시간만 바꿔도 몸은 달라져요.</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              <strong>16시간 공복, 8시간 식사</strong>라는 단순한 규칙만 지키면
              되는 가장 실용적인 간헐적 단식
            </p>
            <p>무엇을 먹느냐보다는 ‘언제 먹느냐’에 집중하는 방식!</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실!</h4>
            <p>
              공복 시간이 길어지면 간의 글리코겐이 고갈되고, 지방산 산화가
              촉진돼요.
            </p>
            <p>
              이때 인슐린 분비가 줄고, 케톤체 생성이 시작되면서 체지방이 서서히
              줄어들어요.
            </p>
            <p>
              대체로 하루 300~500kcal 자연 감소되기 때문에 따로 칼로리 계산을 안
              해도 되는 점도 매력적.
            </p>
          </div>
          <img src={TimeEating01} alt="TimeEating01" />

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 쉬운 편이에요.</h4>
            <p>식사 내용 제한 없이 시간만 지키면 OK!</p>
            <p>14:10, 12:12로 완화하거나 점진적으로 바꿀 수도 있어요.</p>
            <p>운동과 병행하면 효과 상승!</p>
            <p>단, 외식/모임 일정과 충돌, 일부에게 폭식 유발 가능성은 주의!</p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>규칙만 단순할 뿐, 식단의 질은 매우 중요</p>
            <p>장기간 열량이 부족하면 비타민 B군, 철, 칼슘 결핍 우려 있어요.</p>
            <p>
              특히 여성은 호르몬 기능 저하, 생리불순, 무월경 등 부작용이
              보고되기도 해요.
            </p>
            <p>
              공복 스트레스, 집중력 저하, 위장 불편감 등 단기 부작용도 있을 수
              있어요.
            </p>
            <p>
              (Randomized controlled trial for time-restricted eating in healthy
              volunteers without obesity. Xie, Z. Sun, Y. Ye Y. et al. 2022)
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>인슐린 감수성 향상, 자가포식 활성화 → 노화 억제</p>
            <p>지방조직 갈변화 → 에너지 소비 증가</p>
            <p>중성지방과 LDL 콜레스테롤 감소, 심혈관 건강 개선</p>
            <p>간 기능 정상화, NAFLD·대사증후군 예방 효과</p>
            <p>
              <small>
                (Randomized controlled trial for time-restricted eating in
                healthy volunteers without obesity. Xie, Z., Sun, Y., Ye, Y. et
                al. 2022)
              </small>
            </p>
          </div>

          <b className="last-info">
            먹는 시간만 바꿔도 몸은 달라져요.
            <br />
            처음 다이어트를 시작할 땐, 이만한 입문 식단도 없어요.
            <br />
            하지만 장기적으로는 <strong>영양 균형</strong> 꼭 챙겨야 해요!
          </b>
        </TabPanel>

        <TabPanel header="5:2">
          <div className="title-sub">
            <p>5:2</p>
            <img src={Grade_b_img} alt="Grade_b_img" />
          </div>

          <b>매일 굶지 않아도, 일주일 2일만 전략적으로!</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              일주일 중 2일만 칼로리를 제한하고, 나머지 5일은 자유롭게 먹는
              식단이에요.
            </p>
            <p>
              여성은 하루 500kcal, 남성은 600kcal 정도로 제한하며 탄력적이고
              현실적인 간헐적 단식방식이에요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 효과는 있을까?</h4>
            <p>
              체중과 복부 지방이 줄어들고, 인슐린 감수성도 좋아졌다는 연구가
              있어요.
            </p>
            <p>지질 수치 안정, 혈압 감소, 공복 혈당 개선도 기대할 수 있어요.</p>
            <p>
              <small>
                (Clinical application of intermittent fasting for weight loss:
                progress and future directions. Krista A Varady et al. Nat Rev
                Endocrinol. 2022)
              </small>
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 쉬운 편이에요.</h4>
            <p>5일은 일상대로 식사 가능 → 심리적 부담 적음!</p>
            <p>
              단, 제한일에는 식단 관리가 까다롭거나 폭식 유도 시 실패할 수
              있어요.
            </p>
            <p>
              바쁜 직장인이나 일정이 들쭉날쭉한 사람에게도 잘 맞는 스타일이에요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>건강한 성인에겐 단기~중기적으론 안전</p>
            <p>하지만 공복감, 피로, 집중력 저하가 생길 수 있어요</p>
            <p>장기적 시행시 영양결핍 우려</p>
            <p>→ 다중영양소 보충제 섭취 또는 고품질 탄수화물 식품 포함 필요</p>
            <p>
              <small>
                (Randomized controlled trial for time-restricted eating in
                healthy volunteers without obesity. Xie, Z. Sun, Y. Ye Y. et al.
                2022)
              </small>
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>인슐린 저항성 감소, 염증 억제, 간 기능 개선 보고</p>
            <p>일부 연구에서는 산화 스트레스 감소, 혈압 안정화도 나타났어요</p>
            <p>제2형 당뇨병과 대사질환 예방 가능성도 주목받고 있어요.</p>
            <p>
              <small>
                (Cardiometabolic Benefits of Intermittent Fasting. Krista A
                Varady et al. Annu Rev Nutr. 2021)
              </small>
            </p>
          </div>
          <img src={TimeEating02} alt="TimeEating02" />

          <b className="last-info">
            매일 굶지 않아도, 일주일 2일만 전략적으로!
            <br />
            바쁜 사람에게 딱, 하지만 제한일은 신중하게!
            <br />
            꾸준히 하면 건강도 살도, 둘 다 잡을 수 있어요!
          </b>
        </TabPanel>

        <TabPanel header="격일단식">
          <div className="title-sub">
            <p>격일단식</p>
            <img src={Grade_d_img} alt="Grade_d_img" />
          </div>

          <b>살은 빠르지만, 피로와 스트레스도 따라와요.</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              하루는 먹고, 하루는 거의 안 먹는 간헐적 단식의 극단 버전이에요.
            </p>
            <p>
              단식일엔 500~700kcal 미만으로 제한하거나 아예 금식하고, 다음 날은
              정상 식사를 하는 방식이에요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실하지만 부담도 커요!</h4>
            <p>
              체중 감량 속도는 빠르지만, 일상에 적용하기는 꽤 어렵고 피로감도
              커요.
            </p>
            <p>
              체중과 체지방이 눈에 띄게 줄고, 지방산 산화 증가와 지질 지표 개선
            </p>
            <p>
              <small>
                (A meta-analysis comparing the effectiveness of alternate day
                fasting, the 5:2 diet, and time-restricted eating for weight
                loss. Paloma Elortegui Pascual et al. 2023)
              </small>
            </p>
            <p>
              하지만 배고픔, 집중력 저하, 피로감도 자주 나타난다는 연구 결과
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⚠️ 오래 유지하긴 쉽지 않아요</h4>
            <p>반복되는 금식 루틴은 탈락률이 높고, 폭식 유발 위험도 커요.</p>
            <p>
              격일로 식사를 제한해야 하기 때문에 사회생활, 감정 관리에 어려움이
              많아요.
            </p>
            <p>장기적으로는 근손실, 기초대사량 저하, 에너지 부족 문제!</p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>
              심혈관 지표 개선, 염증 지표 감소 등은 일부 연구에서 확인됐어요.
            </p>
            <p>
              하지만 장기 추적 연구가 부족하고, 지속성 자체가 매우 떨어지는
              단점이 있어요.
            </p>
            <p>단식일이 반복될수록 체내 항상성 저하도 우려돼요.</p>
          </div>

          <b className="last-info">
            살은 빠르지만, 피로와 스트레스도 따라와요.
            <br />
            단식일 반복은 강한 통제력 없이는 지속이 어려워요.
            <br />
            일상과 병행이 어렵다면, 다른 방식이 더 나을 수 있어요!
          </b>
        </TabPanel>

        <TabPanel header="1일 1식">
          <div className="title-sub">
            <p>1일 1식</p>
            <img src={Grade_d_img} alt="Grade_d_img" />
          </div>

          <b>빠른 체중 감량엔 좋지만, 몸이 버티기엔 너무 극단적이에요.</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>하루 한 끼만 먹는 극단적인 단식 방식이에요.</p>
            <p>
              남은 시간은 전부 공복 상태로 보내며, 단 한 끼 식사에 모든 영양소를
              몰아 섭취하는 구조예요.
            </p>
            <p>
              한 끼로 끝내는 간편함은 있지만, 몸과 마음엔 상당한 부담이 갈 수
              있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실하지만 리스크도 확실!</h4>
            <p>
              하루 한 끼만 먹기 때문에 총 섭취 칼로리가 급격히 줄고 체중도 빨리
              줄어요.
            </p>
            <p>일시적 혈당 안정, 지질 수치 개선 등의 효과가 보고됐지만,</p>
            <p>식사 직후 인슐린 급등, 혈당 변동성 증가 등 부작용도 많아요.</p>
            <p>피로감, 두통, 집중력 저하 등 단기 증상도 자주 나타나요.</p>
            <p>
              <small>
                (Differential Effects of One Meal per Day in the Evening on
                Metabolic Health and Physical Performance in Lean Individuals,
                Emma C E, Meessen et al., 2022)
              </small>
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>⚠️ 장기 실천은 매우 어려운 편</h4>
            <p>
              사회적 식사와 충돌하고, 폭식 충동이나 정서적 스트레스를 유발할 수
              있어요.
            </p>
            <p>식사행동 장애로 이어질 위험도 존재해요.</p>
            <p>
              기초대사량 저하, 근손실, T3·렙틴 호르몬 불균형도 장기적
              우려사항이에요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>📢 식단 구성은 매우 제한적이에요</h4>
            <p>하루 한 끼에 모든 영양소를 채우긴 현실적으로 어려워요.</p>
            <p>지용성 비타민, 단백질, 식이섬유 등이 부족해지기 쉬워요.</p>
            <p>
              소화기계 부담이 커서 위염, 속쓰림, 설사 등도 발생할 수 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>장기적으로는 철, 칼슘, 비타민 B군 등의 결핍 위험이 있어요.</p>
            <p>
              항산화나 항염 효과에 대한 과장된 정보도 많아, 과학적 해석이
              중요해요.
            </p>
          </div>

          <b className="last-info">
            빠른 체중 감량엔 좋지만, 몸이 버티기엔 너무 극단적이에요.
            <br />
            하루 한 끼로 모든 걸 해결하긴 어려워요.
            <br />
            장기적으로는 건강에 손해가 더 클 수 있어요!
          </b>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default TimeEating;
