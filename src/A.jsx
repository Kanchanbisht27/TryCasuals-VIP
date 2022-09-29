import React from "react";
import { useState } from "react";
import B from "./B";

function A() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-5 bg-red-500">
      <B count={count} updateCount={setCount}></B>
    </div>
  );
}
export default A;
