import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Main } from "./pages/Main";
import PriceDashboard from "./pages/PriceDashboard";

function AppRoutes() {
  const location = useLocation();
  const hideNav = location.pathname === "/";

  return (
    <>
      {!hideNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forecast" element={<PriceDashboard />} />
      </Routes>
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
