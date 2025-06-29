import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import LowCarb from "./pages/LowCarb";
import TimeEating from "./pages/TimeEating";
import HealthFirst from "./pages/HealthFirst";
import Flexitarian from "./pages/Flexitarian";
import HardcoreDiet from "./pages/HardcoreDiet";
import Others from "./pages/Others";
import DietTest from "./pages/DietTest";
import DietRadar from "./pages/DietRadar";
import Persona from "./pages/Persona";
import DietGrade from "./pages/DietGrade";
import WhyWeMadeIt from "./pages/WhyWeMadeIt";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import DietTestTest from "./pages/DietTestTest";
import DietTestResult from "./pages/DietTestResult";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000); // 랜딩이 사라지는 시간

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        {/* 홈 화면 (배경) */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dietPlan/lowCarb" element={<LowCarb />} />
              <Route path="dietPlan/timeEating" element={<TimeEating />} />
              <Route path="dietPlan/healthFirst" element={<HealthFirst />} />
              <Route path="dietPlan/flexitarian" element={<Flexitarian />} />
              <Route path="dietPlan/hardcoreDiet" element={<HardcoreDiet />} />
              <Route path="dietPlan/others" element={<Others />} />

              <Route path="dietTest" element={<DietTest />} />
              <Route path="dietTest-test" element={<DietTestTest />} />
              <Route path="dietTest-result/:id" element={<DietTestResult />} />
              <Route path="dietRadar" element={<DietRadar />} />
              <Route path="persona" element={<Persona />} />
              <Route path="about/dietGrade" element={<DietGrade />} />
              <Route path="about/whyWeMadeIt" element={<WhyWeMadeIt />} />

              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
        {/* 랜딩 페이지: 위에 덮어놓고 페이드아웃 */}
        {showLanding && <LandingPage />}
      </div>
    </>
  );
}

export default App;
