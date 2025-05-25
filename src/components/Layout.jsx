import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import Logo_img from "@/assets/img/Logo.png";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) =>
      prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
    );
  };

  const isExpanded = (menu) => expandedMenus.includes(menu);

  return (
    <div className="layout">
      <header className="layout-header">
        <img
          src={Logo_img}
          className="logo-img"
          onClick={() => navigate("/")}
        />
        <h1 className="hidden">알쓸영잡</h1>
        <AiOutlineMenu
          size={24}
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        />
      </header>

      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <button className="drawer-close-btn" onClick={() => setMenuOpen(false)}>
          <AiOutlineClose />
        </button>

        <nav className="drawer-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>

          <div className="menu-group">
            <div className="menu-header" onClick={() => toggleMenu("dietPlan")}>
              <span>다이어트 식단</span>
              {isExpanded("dietPlan") ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            {isExpanded("dietPlan") && (
              <div className="submenu">
                <Link to="/dietPlan/lowCarb" onClick={() => setMenuOpen(false)}>
                  탄수화물 제한
                </Link>
                <Link
                  to="/dietPlan/timeEating"
                  onClick={() => setMenuOpen(false)}
                >
                  시간제 식사
                </Link>
                <Link
                  to="/dietPlan/healthFirst"
                  onClick={() => setMenuOpen(false)}
                >
                  건강최우선
                </Link>
                <Link
                  to="/dietPlan/flexitarian"
                  onClick={() => setMenuOpen(false)}
                >
                  유연한 채식
                </Link>
                <Link
                  to="/dietPlan/hardcoreDiet"
                  onClick={() => setMenuOpen(false)}
                >
                  극한의 인내
                </Link>
                <Link to="/dietPlan/others" onClick={() => setMenuOpen(false)}>
                  기타
                </Link>
              </div>
            )}
          </div>

          <Link to="/dietTest" onClick={() => setMenuOpen(false)}>
            DIET 테스트: 다이어터뷰
          </Link>
          <Link to="/dietRadar" onClick={() => setMenuOpen(false)}>
            다이어트 비교 레이더
          </Link>
          <Link to="/persona" onClick={() => setMenuOpen(false)}>
            페르소나: 이런 분들께 추천합니다
          </Link>

          <div className="menu-group">
            <div className="menu-header" onClick={() => toggleMenu("about")}>
              <span>ABOUT</span>
              {isExpanded("about") ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            {isExpanded("about") && (
              <div className="submenu">
                <Link to="/about/dietGrade" onClick={() => setMenuOpen(false)}>
                  다이어트 등급이란?
                </Link>
                <Link
                  to="/about/whyWeMadeIt"
                  onClick={() => setMenuOpen(false)}
                >
                  제작 의도
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <p>알쓸영잡 | KHU 영양팩트랩</p>
        <p>
          본 서비스는 경희대학교 식품영양학과 팀 KHU영양팩트랩의 캡스톤디자인
          프로젝트의 일환으로 제작되었습니다.
        </p>
        <p>&copy; 2025 알쓸영잡 All Rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
