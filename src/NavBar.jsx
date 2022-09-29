import React from "react";
import { BsCart2 } from "react-icons/bs";

function NavBar({ productCount }) {
  console.log(productCount)
  return (
    <div className="bg-white py-4 px-2">
      <div className="max-w-6xl flex justify-between items-center mx-auto ">
        <img className="h-14" src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg" />
        <div className="flex flex-col items-center">
          <BsCart2 className="text-5xl pb-3 text-orange-500" />
          <span className="-m-11">{productCount}</span>
        </div>
      </div>
    </div>
  )
}
export default NavBar;