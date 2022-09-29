import React from "react";
import { ImSpinner10 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex items-center justify-center text-3xl text-indigo-700 grow">
      <ImSpinner10 className="text-5xl animate-spin" />
    </div>
  );
}

export default Loading;

//=> agar loading wala icon ko spin krna h tho class lagani padegi ya className="animate-spin"
