import React, { useState } from "react";

export default function PriceDashboard() {
  const [test, setTest] = useState(true);
  const handleClick = () => {
    console.log(test);
    setTest((curr) => !curr);
  };
  return (
    <div>
      <button onClick={handleClick}>클릭2</button>
      <span>{test}</span>
    </div>
  );
}
