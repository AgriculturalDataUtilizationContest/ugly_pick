import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./screens/Main";
import { ForecastTest } from "./screens/ForecastTest"; // 임시 import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forecast" element={<ForecastTest />} /> {/* 테스트용 */}
      </Routes>
    </Router>
  );
}