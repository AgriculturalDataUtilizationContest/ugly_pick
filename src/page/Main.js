import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>클릭</button>
    </div>
  );
}
