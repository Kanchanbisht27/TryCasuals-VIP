import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ productCount }) {
  return (
    <div className="px-2 py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <Link to="/">
          <img
            className="h-14"
            src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          />
        </Link>
        <div className="justify-items-end">
          <Link to="login">
            <button className="px-3 py-2 text-2xl font-bold text-tomato-700 bg-tamato-500 ">
              Login
            </button>
          </Link>
          <Link to="SignUp">
            <button className="px-3 py-2 text-2xl font-bold text-tomato-700 bg-tamato-500 ">
              SignUp
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <BsCart2 className="pb-3 text-5xl text-orange-500" />
          <span className="-m-11">{productCount}</span>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
