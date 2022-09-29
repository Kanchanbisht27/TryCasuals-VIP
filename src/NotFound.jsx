import React from "react";
import { FaArrowRight } from "react-icons/fa"
import {Link} from "react-router-dom"

function NotFound() {
  return ( <div className=" bg-gray-100 flex flex-wrap align-center justify-center">
      <div>
        <img src="https://cdn.mos.cms.futurecdn.net/mYKbf3DSinvWnEzmHkEnCE-1200-80.jpg.webp" />
      </div>
    <div>
    <div className=" items-center text-center ">
      <h1 className="text-3xl text-gray-700 pt-3 ">Page Not Found</h1>
      <p className="text-gray-500 pt-2 ">We're sorry, the page requested could not be found...<span className="text-indigo-500"/>Please go back to the homepage</p>
      </div>
      <div className=" pt-1 place-items-center ">
    <Link className="text-indigo-500 flex items-center justify-center text-3xl mr-6 " to ="/">
       <FaArrowRight className="text-6xl m-2 pl-5 mr-2"/> Home Page
    </Link>
      </div>
      </div>
      
    </div>
  )
   
}
export default NotFound;