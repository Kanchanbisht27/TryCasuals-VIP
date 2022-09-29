import { memo } from "react";
import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xl disabled:bg-tomato-300 text-white rounded-md bg-tomato-700"
    ></button>
  );
}

const ShaiValaButton = memo(Button);
export default ShaiValaButton;
