import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-wrap justify-center bg-gray-100 align-center">
      <div>
        <img src="https://cdn.mos.cms.futurecdn.net/mYKbf3DSinvWnEzmHkEnCE-1200-80.jpg.webp" />
      </div>
      <div>
        <div className="items-center text-center ">
          <h1 className="pt-3 text-3xl text-gray-700 ">Page Not Found</h1>
          <p className="pt-2 text-gray-500 ">
            We're sorry, the page requested could not be found...
            <span className="text-indigo-500" />
            Please go back to the homepage
          </p>
        </div>
        <div className="pt-1 place-items-center">
          <Link
            className="flex items-center justify-center mr-6 text-3xl text-indigo-500 "
            to="/"
          >
            <FaArrowRight className="pl-5 m-2 mr-2 text-6xl" /> Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
