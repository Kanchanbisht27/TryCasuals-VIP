import React from "react";
import Button from "./Button";

function C({ count, updateCount }) {
  function increment() {
    updateCount(count + 1);
  }

  return (
    <div className="flex p-5 item-center bg-sky-500">
      <h1>Count is {count} </h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
export default C;
