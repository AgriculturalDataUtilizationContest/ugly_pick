import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./page/Main";
import PriceDashboard from "./page/PriceDashboard";
import Recommand from "./components/PriceDashboard/Compare/Recommand";
// import { IssueCheck } from "./components/PriceDashboard/Issue/IssueCheck";

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<PriceDashboard />} />
        {/* <Route path="/issuecheck" element={<IssueCheck />} /> */}
        <Route path="recommand" element={<Recommand />} />
      </Routes>
    </BrowserRouter>
  );
}
