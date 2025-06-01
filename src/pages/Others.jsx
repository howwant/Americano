import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import Grade_f_img from "@/assets/img/LowCarb/grade_f.png";
import Grade_d_img from "@/assets/img/LowCarb/grade_d.png";

const Others = () => {
  return (
    <div className="common">
      <div className="title">
        <h3>한 병에 담긴 기대감</h3>
        <p>마시면 빠질 것 같은 느낌,</p>
        <p>다들 한 번쯤은 믿어봤잖아요.</p>
      </div>

      <TabView>
        <TabPanel header="디톡스 다이어트">
          <div className="title-sub">
            <p>디톡스</p>
            <img src={Grade_f_img} alt="Grade_f_img" />
          </div>

          <b>독소를 빼낸다지만, 과학은 글쎄요…</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              ‘마스터 클렌즈’라고도 불리는 레몬 디톡스는 고체 음식 없이 10일간
              특제 음료(레몬즙 + 메이플시럽 + 카이엔페퍼)만 마시는
              초저열량(800~1000kcal) 식단이에요.
            </p>
            <p>
              식사를 완전히 배제하고 체중 감량과 독소 배출을 동시에 노리는
              방식이에요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 확실!</h4>
            <p>
              총 섭취량이 급격히 줄어들기 때문에 체중과 부기가 빠르게 감소할 수
              있어요.
            </p>
            <p>일시적인 장 청소나 식욕 억제 효과도 기대할 수 있어요.</p>
            <p>
              일부 미네랄(K, Mg, Zn)이 보충되기도 하지만, 대부분은 수분·근육
              손실이 감량 원인이에요.
            </p>
            <p>‘해독’ 효과는 과학적으로 아직 명확한 근거가 부족해요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지는 매우 어려워요.</h4>
            <p>
              단백질과 지방이 결핍되어 근손실과 기초대사량 저하 위험이 커요.
            </p>
            <p>반복할 경우 요요, 폭식, 정서적 피로까지 유발돼요.</p>
            <p>사회생활과 병행하기도 사실상 불가능에 가까워요.</p>
          </div>
          <Divider></Divider>
          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>저혈당, 전해질 불균형, 두통, 무기력감 등이 발생할 수 있어요.</p>
            <p>
              디톡스 과정에서 POPs(지속성 유기오염물질)가 혈중으로 이동할 우려도
              있어요.
            </p>
            <p>
              참고로 간과 신장은 원래 해독 기능을 수행하므로 별도 디톡스가 꼭
              필요하진 않아요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>레몬이나 고춧가루에는 항산화 성분이 있지만,</p>
            <p>
              디톡스 주스로 해독이나 체중 조절을 한다는 주장은 과장된 경우가
              많아요.
            </p>
          </div>

          <b className="last-info">
            빠르게 살은 빠지지만, 건강까지 빠질 수 있어요.
            <br />
            굶는 대신, <strong>먹는 방식을 바꾸는 것</strong>이 더 안전해요!
          </b>
        </TabPanel>

        <TabPanel header="애사비">
          <div className="title-sub">
            <p>애사비</p>
            <img src={Grade_d_img} alt="Grade_d_img" />
          </div>

          <b>식초 한 스푼, 다이어트 묘약일까?</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              <strong>사과를 발효해 만든 식초</strong>에 포함된{" "}
              <strong>초산(아세트산)</strong>이 혈당과 지방 대사를 조절하는
              원리를 이용해요.
            </p>
            <p>
              보통 <strong>식사 직전에 ACV를 15~30ml 물에 희석해 섭취</strong>
              하며, 혈당 상승을 완화하고 포만감을 높이는 전략이에요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 꽤 유망해요!</h4>
            <p>
              임상연구에 따르면, 체중·BMI·체지방률·혈당·지질 수치 개선이
              확인됐어요.
              <br />
              <small>
                (Apple cider vinegar for weight management in Lebanese
                adolescents and young adults with overweight and obesity: a
                randomised, double-blind, placebo-controlled study, Rony
                Abou-Khalil at al)
              </small>
            </p>
            <p>
              전분 소화 효소 억제, 위 배출 지연으로 포만감 지속 효과도 있어요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 유지도 비교적 쉬운 편이에요.</h4>
            <p>
              식단 제한 없이 추가로 음료만 마시면 되므로 부담이 적고, 실생활
              적용이 쉬운 편이에요.
            </p>
            <p>단, 꾸준한 실천과 식사 타이밍 관리는 필요해요.</p>
          </div>
          <Divider></Divider>
          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>원액 섭취 시 식도·위 점막 손상 위험이 있어요.</p>
            <p>공복에 섭취하면 속쓰림이나 위산 과다를 유발할 수 있어요.</p>
            <p>일부 연구는 효과 근거가 약하거나 신뢰도 낮은 사례도 존재해요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              혈당 조절, 인슐린 민감도 향상, 지질 개선, 복부 지방 감소 효과가
              보고됐어요.
            </p>
            <p>하지만 장기적인 안전성은 아직 추가 연구가 필요해요.</p>
          </div>

          <b className="last-info">
            한 스푼의 식초가 혈당을 늦추고, 지방을 막아줘요.
            <br />
            단, 원액은 금물! <strong>꼭 물에 희석해</strong> 드세요.
          </b>
        </TabPanel>

        <TabPanel header="콤부차">
          <div className="title-sub">
            <p>콤부차</p>
            <img src={Grade_d_img} alt="Grade_d_img" />
          </div>

          <b>직접 살을 빼기보단, 몸의 균형을 다잡는다.</b>

          <div className="body-con">
            <h4>🍴 어떤 식단이에요?</h4>
            <p>
              차(홍차/녹차)에 SCOBY(균+효모)를 넣어 발효한 탄산 음료로, 유기산,
              아미노산, 항산화 성분, 프로바이오틱스가 풍부해요.
            </p>
            <p>
              하루 100ml 이내 섭취가 권장되며, 식사 전 포만감을 유도하거나 대사
              개선 보조용으로 활용돼요.
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>👍 단기 효과는 간접적이지만 의미 있어요.</h4>
            <p>
              혈당 조절, 장내 미생물 개선, 산화 스트레스 억제 등 다양한 기능이
              보고됐어요.
            </p>
            <p>변비와 피부 개선에 긍정적이라는 사용자 후기도 많아요.</p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>⭐ 장기 실천은 ‘양 조절’이 관건이에요.</h4>
            <p>
              저칼로리 음료 대체로는 좋지만, 자가 제조 시 위생·발효 관리가
              중요해요.
            </p>
            <p>
              장기 섭취 시 간독성이나 대사성 산증 같은 드문 부작용 사례도
              있어요.
            </p>
          </div>
          <Divider></Divider>

          <div className="body-con">
            <h4>🚨 부작용은 없을까요?</h4>
            <p>
              위 자극, 메스꺼움, 두통 등의 산 과다 관련 증상이 나타날 수 있어요.
            </p>
            <p>1L 이상 장기 섭취 시 간·신장 손상 사례가 보고됐어요.</p>
            <p>임산부, 간 질환자, 신장 환자에게는 섭취 금지 권장돼요.</p>
            <p>
              <small>
                (A review on health benefits of kombucha nutritional compounds
                and metabolites, Martínez Leal, J at al, 2017)
              </small>
            </p>
          </div>

          <Divider></Divider>

          <div className="body-con">
            <h4>🔎 건강에 도움 될 수도 있나요?</h4>
            <p>
              간 해독, 항산화 작용, 장 건강 증진, 혈당 조절 등에 긍정적인 기전이
              보고돼 있어요.
            </p>
            <p>
              직접적인 체중 감량보다는 대사 최적화를 통한 간접적 보조 효과로
              기대돼요.
            </p>
          </div>

          <b className="last-info">
            장 건강부터 잡고 싶다면 콤부차는 좋은 선택!
            <br />
            하지만 너무 많이 마시면 간에 독이 될 수 있어요.
          </b>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Others;
