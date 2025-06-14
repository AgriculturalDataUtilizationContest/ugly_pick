import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./page/Main";
import PriceDashboard from "./page/PriceDashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<PriceDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
